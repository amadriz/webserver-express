const express = require('express');
const app = express();

const hbs = require('hbs');

//HEROKU
const port = process.env.PORT || 3000;

//HELPERS
require('./hbs/helpers');

//Middleware es un callback que se ejecutara no importa el url que la persona pida. Todo dentro del folder public sera presentado en web.

app.use(express.static(__dirname + '/public'));


//Express HBS engine    dirname ((no importa el path que tenga)) para utilizar elementos de html por todo el proyecto
hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs');


//PAGINA HOME
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Allan madriz hovenga',

    });

});
//PAGINA ABOUT
app.get('/about', (req, res) => {

    res.render('about');

});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});