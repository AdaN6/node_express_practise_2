const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
console.log('now')
// res.sendStatus(500)
// res.status(500).send("hi")
// res.status(500).json({message: "Error"});
// res.json({ message: "Error" });
// res.download("server.js");
// res.render('index')
res.render("index", { text: 'World' });


})

app.listen(3000)