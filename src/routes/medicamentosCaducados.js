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
    console.log(lote);

    for (i = 0; i < lote.length; i++) {
        if (lote[i].fecha_vencimiento) {
            lote[i].;
        }
      } 

    res.render('caducados/caducados',{
        lote
    });
    //res.render('caducados/caducados');
    //res.send('letal');
});


module.exports = router;