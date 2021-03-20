const { Client } = require('pg')
const client = new Client()

exports.handler = async function(event, context) {

    await client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world! 2'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()

    return{
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    }
}
