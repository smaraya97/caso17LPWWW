const router = require('express').Router();

router.get('/medicamentosCaducados', (req,res) =>{
    res.render('caducados/caducados');
})

module.exports = router;