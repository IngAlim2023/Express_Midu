const http = require('node:http');  // protocolo HTTP
const desiredPort = process.env.PORT ?? 1234


const processRequest = (req, res) =>{

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === "/"){
        res.statusCode = 200
        res.end('<h1>Hello, World!, Hola compañia</h1>');
    } else if (req.url === "/contacto"){
        res.statusCode = 200
        res.end('<h1>Hola contacto</h1>');
    } else{
        res.statusCode = 404
        res.end('<h1>404 Not Found</h1>');
    }
    
};

const server = http.createServer(processRequest);

server.listen(desiredPort, ()=>{
    console.log(`server listening on port http://localhost:${desiredPort}`)
})