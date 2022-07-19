const router = require('express').Router();
const {default:mongoose} = require('mongoose');
const Prescripcion = require('../models/Prescripcion');

router.get('/preInscription', async (req,res) =>{
    const preins = await Prescripcion.find().lean();
    console.log(preins)
    res.render('preInscription/preInscription',{preins:preins});
});

router.post('/addPrescription', async (req,res)=>{
    const {rutPaciente, nombreMedico, fechaEmision, estado, medicamentos,nombre,gramos,instrucciones} = req.body;
    const newPrescription = new Prescripcion({
        _id: new mongoose.Types.ObjectId(),
        rutPaciente,
        nombreMedico,
        fechaEmision,
        estado,
        medicamentos,
        nombre,
        gramos,
        instrucciones
    });
    var object = {nombre:nombre, gramos:gramos, instrucciones:instrucciones};
    newPrescription.medicamentos.push(object);

    
    await newPrescription.save();
    res.redirect('back');
});

module.exports = router;