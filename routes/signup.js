//var express = require('express');
import express from 'express';
var router = express.Router();
import firebase from '../connections_esm/firebase_connect.js';
import firebaseDb from '../connections/firebase_admin_connect.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebase);


router.get('/', function (req, res) {
    res.render('signup', { title: '註冊'});
})

router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.passwd;
    var nickname = req.body.nickname;
    
    createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed in 
    const user =userCredential.user;
    var saveUser={
        'email':email,
        'nickname':nickname,
        'uid':user.uid
    }
    firebaseDb.ref('/user/'+user.uid).set(saveUser);
    res.redirect('/signup/success')
    //const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.code);
    console.log(error.message);

    // ..
  });

    
})
router.get('/success',function(req,res){
    res.render('success',{
        title:'註冊成功'
    });
})
//module.exports = router;
export default router;