import express from 'express';
var router = express.Router();
import firebaseDb from '../connections/firebase_admin_connect.js';



router.post('/',function(req,res){
    firebaseDb.ref('user/'+req.session.uid).once('value',(snapshot)=>{
        var contract=req.body.contractaddress;
        var abi=req.body.abijson;
        var No=req.body.Number;
        var nftcontent={
            'contract':contract,
            'abi':abi,
            'No':No
        }
        console.log(contract);
        firebaseDb.ref('/user/'+req.session.uid).update(nftcontent)
        .then(()=>{
            res.redirect('/user');
        })

    })
})

export default router;
