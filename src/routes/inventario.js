const router = require('express').Router();
const Medicamento = require('../models/Medicamento');

router.get('/inventario', async (req,res) =>{
    const meds = await Medicamento.find().lean();
    console.log(meds);
    res.render('inventario/inventario', {meds:meds});
})

module.exports = router;