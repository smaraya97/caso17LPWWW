const mongoose = require('mongoose');
const {Schema} = mongoose;


const MedicoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    rut: {type: String, required: true},
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
},{timestamps: true});

module.exports = mongoose.model('Medico', MedicoSchema);
