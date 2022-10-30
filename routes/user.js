//var express = require('express');
import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';

router.get('/', function (req, res) {
    firebaseDb.ref('user/'+req.session.uid).once('value',
    (snapshot)=>{
        res.render('user', { title: '會員專區',nickname:snapshot.val().nickname})

    }
    )
    

})
//module.exports = router; 
export default router;