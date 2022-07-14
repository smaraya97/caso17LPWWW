const router = require('express').Router();

router.get('/mediup', (req,res) =>{
    res.render('mediup/mediup');
});

module.exports = router;