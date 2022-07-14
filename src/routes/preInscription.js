const router = require('express').Router();
const {default:mongoose} = require('mongoose');
const Prescripcion = require('../models/Prescripcion');

router.get('/preInscription', async (req,res) =>{
    const preins = await Prescripcion.find().lean();
    console.log(preins)
    res.render('preInscription/preInscription',{preins:preins});
});

module.exports = router;