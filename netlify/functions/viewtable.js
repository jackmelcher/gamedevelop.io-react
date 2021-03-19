const { Client } = require('pg');

exports.handler = async function (event, context)
{
  const connectionString = process.env.DATABASE_URL;

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  client.query('SELECT * FROM user-submitted', (err, res) => {
    if (err) {
      throw err
    }
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
    
    return{
      statusCode: 200,
      body: JSON.stringify({message: "Hello World"})
    };
  });
}


