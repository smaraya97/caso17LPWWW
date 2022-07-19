const router = require('express').Router();
const {default:mongoose} = require('mongoose');

//Modelos
const Prescripcion = require('../models/Prescripcion');
const Reserva = require('../models/Reserva');
const Medicamento = require('../models/Medicamento');

router.get('/preInscription', async (req,res) =>{
    const preins = await Prescripcion.find().lean();
    const meds = await Medicamento.find().lean();
    console.log(preins)
    res.render('preInscription/preInscription',{
        preins:preins,
        meds
    });
});

router.post('/addPrescription', async (req,res)=>{
    const {rutPaciente, nombreMedico, fechaEmision, estado, nameMed} = req.body;
    console.log("nameMeds", nameMed);
    const meds = await Medicamento.find({nombre: {$in: nameMed}}).lean();
    const newPrescription = new Prescripcion({
        _id: new mongoose.Types.ObjectId(),
        rutPaciente,
        nombreMedico,
        fechaEmision,
        estado,
        medicamentos: meds
    });
    await newPrescription.save();
    res.redirect('back');
});

router.post('/reservarMed', async (req,res) => {
    const {gramos, medicamento, cantidad, idPrescripcion, rutPaciente} = req.body;
    let now = new Date();
    const newReserva = new Reserva({
        _id: new mongoose.Types.ObjectId(),
        idPrescripcion: idPrescripcion,
        rutPaciente: rutPaciente,
        medicamento: medicamento,
        gramos: gramos,
        cantidad: cantidad
    });

    await newReserva.save();
});

module.exports = router;