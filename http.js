const http = require('node:http');  // protocolo HTTP
const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res)=>{
    console.log('request received')
    res.end('Holas')
})

server.listen(desiredPort, ()=>{
    console.log(`server listening on port ${desiredPort}`)
})