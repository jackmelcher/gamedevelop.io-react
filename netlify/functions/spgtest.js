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
    console.log(event);
    //console.log(event.queryStringParameters);
    let queryparam = event.queryStringParameters;
    let wherestring = null;
    
    if(queryparam !== null)
    {
        wherestring = "WHERE "
        for(let x in queryparam)
        {
            console.log(x);
            wherestring += x + "=\'" + queryparam[x]+"\'";
        }
        console.log(wherestring);
    }

    try
    {    
        await client.connect();
        //const result = await client.query('SELECT * FROM user_submitted '+wherestring+';');
        let query = 'SELECT * FROM user_submitted '+wherestring+';';
        let values = [event.queryStringParameters.categories];
        console.log(query);
        
        //const result = await client.query('SELECT * FROM user_submitted '+wherestring+';');
        //const result = await client.query('SELECT * FROM user_submitted;');
        const result = await client.query('SELECT * FROM pop;');
        //const result = await client.query('SELECT * FROM user_submitted WHERE ID=1;');
        
        //const result = await client.query('SELECT * FROM user_submitted WHERE Categories=$1;',values);
        //const result = await client.query(query);
        await client.clean();
        await client.end();
        return {
            statusCode: 200,
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