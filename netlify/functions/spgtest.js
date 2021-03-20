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
    await client.connect();
    const result = await client.query('SELECT * FROM "user-submitted";');
    await client.clean();
    await client.end();
    return {
        statusCode: 200,
        body: JSON.stringify({message: result.rows})
    }
}