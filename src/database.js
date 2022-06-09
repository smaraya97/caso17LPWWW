const mongoose = require('mongoose');

/*const connection = mongoose.connect('mongodb://localhost/dtes-db-app')
    .then(db => console.log("Se conecto correctamente"))
    .catch(err => console.error(err) )
*/

const connection = mongoose.connect('mongodb+srv://tripledobleb:sebayandres123@cluster0.a682e.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log("Se conecto correctamente"))
    .catch(err => console.error(err) )
