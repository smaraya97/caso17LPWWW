const mongoose = require('mongoose');
const {Schema} = mongoose;


const PrescripcionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    rutPaciente: {type: String, required: true},
    nombreMedico: {type: String, required: true},
    fechaEmision: {type: Date, required: true},
    estado: {type: String, required: true}, 
    medicamentos: [{
        nombre: {type: String, required: true},
        gramos: {type: Number, required: true},
        instrucciones: {type: String, required: true},
    }]
},{timestamps: true});

module.exports = mongoose.model('Prescripcion', PrescripcionSchema);

