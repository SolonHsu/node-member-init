
var admin = require("firebase-admin");
//import admin from 'firebase-admin';
var serviceAccount = require("../log-on-project-firebase-adminsdk-s5zc2-fe0ac2f7bd.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://log-on-project-default-rtdb.firebaseio.com"
});

var firebaseDb = admin.database();

module.exports = firebaseDb;
//export default firebaseDb;