const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Medicamento = require('../models/Medicamento');

router.get('/inventario', async (req,res) =>{
    const meds = await Medicamento.find().lean();
    console.log(meds);
    res.render('inventario/inventario', {meds:meds});
});

router.post('/addMed', async (req,res)=>{
    const {sku, nombre, comprimidos, gramos} = req.body;
    //res.send('se agrego un medicamento');
    const newMedicamento = new Medicamento({
        _id: new mongoose.Types.ObjectId(),
        sku,
        nombre,
        comprimidos,
        gramos
        
    });
    await newMedicamento.save();
    res.redirect('back');
});

module.exports = router;