const mongoose = require('mongoose');
const {Schema} = mongoose;


const LoteSchema = new Schema({
    _id: Schema.Types.ObjectId,
    codigo: {type: String, required: true},
    sku: {type: String, required: true},
    nombre: {type: String, required: true},
    cantidadDisponible: {type: Number, required: true},
    cantidadEntregada: {type: Number, required: true},
    fechaVencimiento: {type: Date, required: true},
    gramos: {type: Number},
    comprimidos: {type: Number},
},{timestamps: true});

module.exports = mongoose.model('Lote', LoteSchema);

