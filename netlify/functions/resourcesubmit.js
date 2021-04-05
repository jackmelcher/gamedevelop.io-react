const ServerlessClient = require('serverless-postgres')

const client = new ServerlessClient({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
    ssl: {
        rejectUnauthorized: false
      },
    maxConnections: 19,
});

exports.handler = async(event, context) => {
    //console.log(event);
    //console.log(event.body);
    let data = JSON.parse(event.body);
    let name = data.name;
    let link = data.link;
    let category = data.category;
    let platforms = data.platforms.toString().replace(/\,/g,", ");
    let pricing = data.pricing.toString().replace(/\,/g,", ");
    let tags = data.tags;
    let description = data.description;

    //console.log(data);

    try
    {    
        await client.connect();

        let query = 'Insert INTO user_submitted (name, link, categories, platforms, pricing, tags, description) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        const result = await client.query(query, [name, link, category, platforms, pricing, tags, description]);

        await client.clean();
        await client.end();
        return {
            statusCode: 200,
            //body: JSON.stringify({message: "access to database successful"})
            body: JSON.stringify({message: result.rows})
        }
    }
    catch(err)
    {
        console.log(err.stack);
        await client.clean();
        await client.end();
        return {
            statusCode: 400,
            body: JSON.stringify({message: result.rows})
        }
    }
}