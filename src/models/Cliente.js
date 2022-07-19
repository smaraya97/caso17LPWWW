const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    _id: Schema.Types.ObjectId,
    rut: {type: String, required: true},
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
},{timestamps: true});

module.exports = mongoose.model('Cliente', ClienteSchema);
