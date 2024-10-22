const express =  require('express');
const app =  express();

const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

//Midleware
app.use((req, res, next) =>{
    console.log('ejecutando middleware')
    // trackear la request a la base de datos
    // revisar si el usuario tiene cookies
    next()
})

app.get('/',  (req, res) => {
    res.send('<h1>Mi página</h1>');    
})

app.get('/contacto', (req, res)=>{
    res.send('<h1>Contacto</h1>');
})

app.use((req, res)=>{
    res.status(404).send('<h1>Página no encontrada error 404 </h1> ')
})

app.listen(PORT, ()=>{
    console.log(`server listening on port http://localhost:${PORT}`)
})