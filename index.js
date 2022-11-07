const express = require("express");
const port = 3000
const app = express()

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.render("page/index")
});

app.listen(port, () =>{
    console.log("Servidor iniciado na porta "+ port)
})

