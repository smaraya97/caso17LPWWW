const mongoose = require('mongoose');
const {Schema} = mongoose;


const MedicamentoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    sku: {type: String, required: true},
    nombre: {type: String, required: true},
    comprimidos: {type: Number, required: true},
    gramos: {type: Number, required: true},
},{timestamps: true});

module.exports = mongoose.model('Medicamento', MedicamentoSchema);
