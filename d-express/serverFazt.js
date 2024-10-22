const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/productos", (req, res) => {
  res.send("<h4>Hola mundo get</h4>");
});

app.post("/productos", (req, res) => {
  res.send("<h4>Hola mundo post</h4>");
});

app.get("/json", (req, res) => {
  const data = {
    name: "Juan",
    age: 30,
  };
  res.json(data);
});

app.get("/cod204", (req,res)=>{
  res.status(204)
  res.end()
})
app.get("/user/:username", (req, res)=>{
  const username = req.params.username
  res.send(`Hola ${username}`)
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
