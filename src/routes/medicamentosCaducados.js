const router = require('express').Router();
const mongoose = require('mongoose');

//Modelos
const Medicamento = require('../models/Medicamento');
const Lote = require('../models/Lote');



router.get('/medicamentosCaducados', async (req,res) =>{
    /* const Lotes = await Lote.find().lean();
    console.log(Lotes);
    if (Lotes == null){
        res.render('caducados/caducados');
    } else{
        res.render('caducados/caducados',{
            Lotes
        });
    } */
    const lote = await Lote.find().lean();
    var now = new Date();

    for (i = 0; i < lote.length; i++) {
        date = lote[i].fechaVencimiento;
        if (date > now) {
            lote.splice(i,i);
        } else {
            year = date.getFullYear();
            month = date.getMonth()+1;
            dt = date.getDate();
            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            lote[i].fechaVencimiento = year+'-' + month + '-'+dt;
        }
      } 

    res.render('caducados/caducados',{
        lote
    });
    //res.render('caducados/caducados');
    //res.send('letal');
});


module.exports = router;