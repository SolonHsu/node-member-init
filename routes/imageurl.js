import express from 'express';
var router = express.Router();

router.post('/', function (req, res){
    const contract=req.body.contract;
    
    fetch(contract)
    .then(response=>response.json())
    .then(data=>{console.log(data.image);
                res.send({"success":true,
                            "image":data.image})
    })
    .catch(error=>{console.log(error)})
   

}
)

export default router;