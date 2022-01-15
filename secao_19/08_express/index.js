let express = require('express');
let app = express();

//get pede dados
app.get('/', function(req, res) { //rota / => rota inicial mais genérica de todas da app
    res.send("Primeira rota no express");
});

app.get('/teste', function(req, res) { //rota / => rota inicial mais genérica de todas da app
    res.send("testando rota");
});


app.listen(3000, function() { //3000 é a porta
    console.log("A aplicação está funcionando na porta 3000")
});


//teste => usar postman
