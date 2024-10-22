//Traemos el Framework Express
const express = require("express");

//Creamos la app que va a contener todo lo relacionado con Express:
const app = express();

//Generamos el puerto por donde va a estar disponible nuestra API:
//Si no hay un puerto definido en el entorno, se usa el 3500 por default
const PORT = process.env.PORT ?? 3500;


// Configuramos el middleware

app.use((req, res, next)=>{
    console.log("Middleware activo");
    next();
})

// Generamos las rutas o endpoints para nuestra API:

app.get('/', (req, res)=>{
    res.send("<h1>Corriste el servidor correctamente, Congratulations!!!!</h1>")
})

app.get('/productos', (req, res)=>{
    res.send("<h1>Bienvenido a productos GET!!!!</h1>")
})

app.post('/productos', (req, res)=>{
    res.send("<h1>POST productos!!!!</h1>")
})

app.put('/productos', (req, res)=>{
    res.send("<h1>PUT productos!!!!</h1>")
})

app.delete('/productos', (req, res)=>{
    res.send("<h1>DELETE productos!!!!</h1>")
})

app.get('/productos/:id', (req, res)=>{
    res.send("<h1>Obtener un producto!!!!</h1>")
})

app.use((req, res)=>{
    res.status(404).send("<h1>404: No se encontró la ruta</h1>");
})
// El aplicativo  escucha en el puerto definido y ahora esta corriendo:

app.listen(PORT , () => {
    console.log(`Corriendo en el puerto: http://localhost:${PORT}`);
})
