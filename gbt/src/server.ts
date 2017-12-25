// import * as http from 'http'
import * as express from 'express'
const app = express()
let nconf = require('nconf')
// const server = http.createServer(function(request:http.IncomingMessage,response:http.ServerResponse):void{
//     console.log("crate a server...")
//     response.writeHead(200,{'Content-Type':'text/plain'})
//     response.write('Hello world,we use typescript to develop.')
//     response.end()
// })

// server.listen(3000,function(){
//     console.log("server listening on port 3000")
//     console.log("test...")
// })
nconf.argv().env().file({file:'path/to/config.json'})
nconf.set('database:host','127.0.0.1')
nconf.set('database:port','3000')
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(nconf.get('database:port'),'localhost',()=>{
    console.log(`express服务已经启动：localhost:3000`)
})