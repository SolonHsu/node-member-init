
/*var express = require('express');
var router = express.Router();*/
import express from 'express';
var router = express.Router();
//var firebaseDb = require('../connections/firebase_admin_connect');
import firebaseDb from '../connections/firebase_admin_connect.js';
import firebase from '../connections_esm/firebase_connect.js';
//var firebase = require('../connections_esm/firebase_connect');


router.get('/', function (req, res, next) {
    firebaseDb.ref('list').once('value',function(Snapshot){
        
        var auth=req.session.uid;
        res.render('index', {
            title: '六角學院留言板',
            auth:auth,
            errors:req.flash('errors'),
            list:Snapshot.val()
        });
    })
    
   
});
/* GET home page. */
//module.exports = router;
export default router;