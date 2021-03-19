const { Client } = require('pg');

exports.handler = async function (event, context)
{
  console.log("PG serverless function");

  const connectionString = process.env.DATABASE_URL;

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  const result = await client.query('SELECT * FROM user-submitted', (err, res) => {
    if (err) throw err;
    console.log(res);
    client.end();
  });
  
  return{
    statusCode: 200,
    body: JSON.stringify(result)
  };
}


