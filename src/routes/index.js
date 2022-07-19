const router = require('express').Router();

router.get('/', (req,res) =>{
    res.render('users/signin');
});


module.exports = router;
