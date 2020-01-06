const http = require("http")
const requestHandler = (request, response)=>{
    response.end("Hello World");
}
const server = http.createServer(requestHandler);
server.listen("3000", (err)=>{
    console.log("listening at 3000")
    
})