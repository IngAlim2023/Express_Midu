//Traemos el Framework Express
const express = require("express");

//Creamos la app que va a contener todo lo relacionado con Express:
const app = express();

//Generamos un arreglo para que se pueda mostrar en la solicitud GET:
const produtcs = [
    {
        id:1,
        name:"Laptop Mac",
        price: 1000
    }
]

//Generamos el puerto por donde va a estar disponible nuestra API:
//Si no hay un puerto definido en el entorno, se usa el 3500 por default
const PORT = process.env.PORT ?? 3500;


// Configuramos el middleware

app.use((req, res, next)=>{
    console.log("Middleware activo");
    next();
})

//Usamos el middleware para que se pueda leer el body de la solicitud

app.use(express.json());

// Configuramos las rutas de los archivos estáticos:
app.use('/static', express.static('assets'))

// Generamos las rutas o endpoints para nuestra API:

app.get('/', (req, res)=>{
    res.sendFile("./vista.html",
        root = {
            root: __dirname
        }
    )
})

app.get('/perro', (req, res)=>{
    res.sendFile("./index.html",
        root = {
            root: __dirname
        }
    )
})

app.get('/bibliografia', (req,res)=>{
    res.sendFile("./bibliografia.html",
        root = {
            root: __dirname

        }
)
})

app.get('/productos', (req, res)=>{
    res.json(produtcs);
})

app.post('/productos', (req, res)=>{
    console.log(req.body);
    const  producto = {...req.body, id:  produtcs.length + 1};
    produtcs.push(producto);
    console.log(produtcs);
    res.json(produtcs);
})

app.put('/productos', (req, res)=>{
    res.send("<h1>PUT productos!!!!</h1>")
})

app.delete('/productos', (req, res)=>{
    res.send("<h1>DELETE productos!!!!</h1>")
})

app.get('/productos/:id', (req, res)=>{
    const  id = req.params.id;
    const  productoEncontrado = produtcs.find((p)=> p.id === parseInt(id));

    console.log(productoEncontrado);
    if (productoEncontrado){
        res.json(productoEncontrado);
    }else{
        res.status(404).send("<h1>Producto no encontrado</h1>")
    }
    
})

app.use((req, res)=>{
    res.status(404).send("<h1>404: No se encontró la ruta</h1>");
})
// El aplicativo  escucha en el puerto definido y ahora esta corriendo:

app.listen(PORT , () => {
    console.log(`Corriendo en el puerto: http://localhost:${PORT}`);
})
