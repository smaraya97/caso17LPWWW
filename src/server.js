const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

let hbs = exphbs.create({});

const mongoose = require('mongoose');

/* const connection = mongoose.connect('mongodb://localhost/dtes-db-app')
.then(db => console.log("Se conecto correctamente"))
.catch(err => console.error(err) )
 */

hbs.handlebars.registerHelper('dateFormat', (date, flag)=>{
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if ( dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }
    return flag ? dd + '/' + mm + '/' + date.getFullYear() : 
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
});

//Iniciar express
const app = express();
require('./database');
//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//Se setea el uso de handle bars
app.set('view engine', '.hbs')

//middleware
app.use(express.static(path.join(__dirname + 'public')));

app.use(express.urlencoded({extended: false}));


//Routes
app.use(require('./routes/users'));
app.use(require('./routes/index'));
app.use(require('./routes/informe'));
app.use(require('./routes/inventario'));
app.use(require('./routes/preInscription'));
app.use(require('./routes/medicamentosCaducados'));
app.use(require('./routes/mediup'));
//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server listen
app.use(function(req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe. Que tengas un buen día :)");
});

app.listen(app.get('port'), () =>{
    console.log(`Se inicio correctamente ${app.get('port')}`)
});

