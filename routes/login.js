//var express = require('express');
import express from 'express';
var router = express.Router();
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import firebase from '../connections_esm/firebase_connect.js';
//import firebaseDb from '../connections/firebase_admin_connect.js';
const auth = getAuth();

router.get('/', function (req, res) {
    res.render('login', { title: '登入',error:req.flash('error')});
})
router.post('/', function (req, res) {
    var email = req.body.email;
    var password=req.body.passwd;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('登入成功');
    req.session.uid=user.uid;
    res.redirect('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log('登入失敗');
    console.log(errorCode);
    req.flash('error',errorMessage);
    res.redirect('login');
  })
})
export default router;