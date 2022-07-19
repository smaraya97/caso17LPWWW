const mongoose = require('mongoose');
const {Schema} = mongoose;


const ReservaSchema = new Schema({
    _id: Schema.Types.ObjectId,
    idPrescripcion: {type: mongoose.Schema.Types.ObjectId, ref:'Prescripcion'},
    rutPaciente: {type: String, required: true},
    medicamento: {type: String, required: true},
    encargadoFarmacia: {type: String, required: true},
    cantidad: {type: Number, required: true},
    gramos: {type: Number, required: true},
    fechaReserva: {type: Date, required: true},
},{timestamps: true});

module.exports = mongoose.model('Reserva', ReservaSchema);
