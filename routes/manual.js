import express from 'express';
var router = express.Router();

router.get('/',function(req,res){
    res.render('manual');
})

export default router;