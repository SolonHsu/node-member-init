//var express = require('express');
import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';
import {check,validationResult} from'express-validator';


router.post('/',check("content").isEmpty(),function (req, res) {
    //check("content","不能為空值").notEmpty();
    const hasErrors= validationResult(req).isEmpty();
    console.log(hasErrors);
    if(hasErrors){
        req.flash('errors',"不能為空值");
        console.log("失敗");
        res.redirect('/');
    }else{

   firebaseDb.ref('user/'+req.session.uid).once('value',(snapshot)=>{
       var nickname = snapshot.val().nickname;
       var ref = firebaseDb.ref('list').push();
       var listContent = {
           nickname:nickname,
           content:req.body.content
       }
       ref.set(listContent)
       .then(()=>{
           res.redirect('/');
       })
   })
    }
})
export default router;