const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.send('get users');
})

router.post("/",(req,res)=>{
    res.send('post users');
});

router.put("/:id",(req,res)=>{
    res.send('put users');

});

router.patch("/:id",(req,res)=>{
    res.send('patch users');
});

router.delete("/:id",(req,res)=>{
    res.send('delete users');
});



module.exports = router;
