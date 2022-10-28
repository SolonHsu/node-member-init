
/*var express = require('express');
var router = express.Router();*/
import express from 'express';
var router = express.Router();
//var firebaseDb = require('../connections/firebase_admin_connect');
import firebaseDb from '../connections/firebase_admin_connect.js';
import firebase from '../connections_esm/firebase_connect.js';
//var firebase = require('../connections_esm/firebase_connect');


router.get('/', function (req, res, next) {
    console.log(firebase.auth);
    firebaseDb.ref().once('value',function(Snapshot){
        console.log(Snapshot.val());
    })
    res.render('index', {
        title: '六角學院留言板',
        test:'測試測試'
    });
   
});
/* GET home page. */
//module.exports = router;
export default router;