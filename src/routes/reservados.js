const router = require('express').Router();
const {default:mongoose} = require('mongoose');

//Modelos
const Reserva = require('../models/Reserva');

router.get('/reservados', async (req,res) =>{
    const reservas = await Reserva.find().lean();
    res.render('reservados/reservados',{
        reservas:reservas
    });
});

router.post('/delReserva', async (req,res) =>{
    const idObj = req.body;
    const id = idObj.id;
    Reserva.findByIdAndRemove(id, function(err, result){
        if (err){
            res.send(err);
        } else {
            res.redirect('back');
        }
    });
});

module.exports = router;