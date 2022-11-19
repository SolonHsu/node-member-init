//var express = require('express');
import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';
//import Eth from 'web3-eth';
//import Web3 from 'web3';





router.get('/', function(req, res){

        firebaseDb.ref('user/'+req.session.uid).once('value',
        (snapshot)=>{
        res.render('user', { title: '會員專區',nickname:snapshot.val().nickname,coinbase:'coin',balance:'balance'});
        })
    }
)
//module.exports = router; 
export default router;