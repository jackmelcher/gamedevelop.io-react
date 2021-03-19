exports.handler = async function(event, context) {
    console.log("Hello World serverless function");

    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}