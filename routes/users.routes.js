const express = require('express');
const { setUser, getUsers, editUser } = require('../controllers/users.controller');
const router = express.Router();


router.get("/",getUsers);
router.post("/",setUser);

router.put("/:id",editUser);

router.patch("/:id",(req,res)=>{
    res.send('patch users');
});

router.delete("/:id",(req,res)=>{
    res.send('delete users');
});



module.exports = router;
