
import express from 'express';
var router = express.Router();

import firebaseDb from '../connections/firebase_admin_connect.js';
import firebase from '../connections_esm/firebase_connect.js';
import Web3 from 'web3'; 
const web3 = new Web3('https://mainnet.infura.io/v3/264f6a80b8ee4c2b990219749f1ee85d');

router.get('/', function (req, res, next) {
    firebaseDb.ref('list').once('value',function(Snapshot){
        
        var auth=req.session.uid;
        res.render('index', {
            title: '留言板',
            auth:auth,
            errors:req.flash('errors'),
            list:Snapshot.val()
            
        });
    })   
});

//module.exports = router;
export default router;