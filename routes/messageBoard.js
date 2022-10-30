//var express = require('express');
import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';
import validationResult from'express-validator';


router.post('/',function (req, res) {
    //const errors =!validationResult(req).isEmpty();
    //console.log(errors);
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
})
export default router;