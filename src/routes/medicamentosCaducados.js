const router = require('express').Router();
const mongoose = require('mongoose');

//Modelos
const Medicamento = require('../models/Medicamento');
const Lote = require('../models/Lote');



router.get('/medicamentosCaducados', async (req,res) =>{
    const lote = await Lote.find().lean();
    let now = new Date();
    for (i = 0; i < lote.length; i++) {
        date = lote[i].fechaVencimiento;
        disp = lote[i].cantidadDisponible;
        if ((date <= now) && (disp != 0)) {
            year  = date.getFullYear();
            month = date.getMonth()+1;
            dt    = date.getDate();
            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            lote[i].fechaVencimiento = year+'-' + month + '-'+dt;
        } else {
            lote.splice(i,1);
            i--;
        }
    } 

    res.render('caducados/caducados',{
        lote
    });
});

router.post('/medicamentosCaducados', async (req,res) => {
    const idObj = req.body;
    const id = idObj._id;
    Lote.findByIdAndUpdate(id,{"cantidadDisponible": 0}, function(err, result){
        if (err){
            res.send(err);
        } else {
            res.redirect('back');
        }
    });
});


module.exports = router;