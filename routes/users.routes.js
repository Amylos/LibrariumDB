const express = require('express');
const { setUser, getUsers,getUser, editUser, deleteUser, changeUser } = require('../controllers/users.controller');
const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getUser);
router.post("/",setUser);
router.put("/:id",editUser);
router.patch("/:id",changeUser);
router.delete("/:id",deleteUser);

module.exports = router;
