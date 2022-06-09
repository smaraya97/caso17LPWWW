const router = require('express').Router();

router.get('/preInscription', (req,res) =>{
    res.render('preInscription/preInscription');
});

module.exports = router;