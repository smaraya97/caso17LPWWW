const router = require('express').Router();

router.get('/inventario', (req,res) =>{
    res.render('inventario/inventario');
})

module.exports = router;