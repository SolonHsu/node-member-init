import express from 'express';
var router=express.Router();

router.get('/',function(req,res){
    delete req.session.uid;
    res.redirect('/');
})

export default router;