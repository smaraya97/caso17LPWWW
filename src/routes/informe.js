const router = require('express').Router();
const { default: mongoose } = require('mongoose');

//Modelos
const Medicamento = require('../models/Medicamento');
const Lote = require('../models/Lote');

router.get('/informeStock', async (req,res) =>{
    const meds = await Medicamento.find().lean();
    const lotes = await Lote.find().lean();
    //console.log("medicamentos", meds);
    console.log("lotes", lotes);
    res.render('informeStock/informeStock',{
        meds,
        lotes
    });
});

router.post('/addLote', async (req,res)=>{
    const {codigo, sku, nombre, cantidadDisponible,fechaVencimiento, gramos, comprimidos} = req.body;
    //res.send('se agrego un medicamento');
    const medicamento = await Medicamento.findOne({sku}).lean();

    const newLote = new Lote({
        _id: new mongoose.Types.ObjectId(),
        codigo,
        sku,
        nombre: medicamento.nombre,
        cantidadDisponible,
        cantidadEntregada: 0,
        fechaVencimiento,
        gramos,
        comprimidos
    });
    await newLote.save();
    res.redirect('back'); 
});
module.exports = router;