//var express = require('express');
import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';

router.get('/', function(req, res){

        firebaseDb.ref('user/'+req.session.uid).once('value',
        (snapshot)=>{
        var snap = snapshot.val();
        res.render('user', { 
        title: '會員專區',
        nickname:snap.nickname,
        email:snap.email,
        contract:snap.contract,
        abi:snap.abi,
        No:snap.No,
        errors:req.flash('errors')
        });
        
        })
    }
)
//module.exports = router; 
export default router;
