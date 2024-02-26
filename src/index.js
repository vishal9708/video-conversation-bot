const  {Server}  = require("./server")
const {dotenv} = require("dotenv")
require('dotenv').config()
const server = new Server();
 
const port = process.env.PORT
server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});