const mongoose = require('mongoose');

/*const connection = mongoose.connect('mongodb://localhost/dtes-db-app')
    .then(db => console.log("Se conecto correctamente"))
    .catch(err => console.error(err) )
*/

const connection = mongoose.connect('mongodb+srv://Admin:1ANyhNhOqNrWGJue@clusterorigin.97pfy1r.mongodb.net/test',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("Se conecto correctamente a mongoDB"))
    .catch(err => console.error(err) )
