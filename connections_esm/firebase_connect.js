
// Import the functions you need from the SDKs you need
import {initializeApp}  from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
//let initializeApp = require('firebase/app');
//let dd =require( "firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9zYp6WlfJzli9yxP38G8YtZ_18VuYaZs",
    authDomain: "log-on-project.firebaseapp.com",
    databaseURL: "https://log-on-project-default-rtdb.firebaseio.com",
    projectId: "log-on-project",
    storageBucket: "log-on-project.appspot.com",
    messagingSenderId: "996362237589",
    appId: "1:996362237589:web:adf6e6016e2c46785b4d9c",
    measurementId: "G-732C9KHLE4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  //firebase = initializeApp(firebaseConfig);
  //const firebase=getAnalytics(app);
  export default app;
  //module.exports=firebase;
