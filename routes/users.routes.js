const express = require('express');
const router = express.Router();
const authentification = require('../middlewares/authentification');
const { setUser, getUsers,getUser,
        editUser, deleteUser, changeUser,
        loginUser,getUserMe } = require('../controllers/users.controller');

router.get("/", authentification,getUsers);
router.get("/me", authentification,getUserMe);

router.get("/:id",getUser);
router.post("/",setUser);
router.put("/:id",editUser);
router.patch("/:id",changeUser);
router.delete("/:id",deleteUser);


router.post('/login',loginUser);

module.exports = router;
