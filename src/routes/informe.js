const router = require('express').Router();

router.get('/informeStock', (req,res) =>{
    res.render('informeStock/informeStock');
});


module.exports = router;