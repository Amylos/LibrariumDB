const express = require('express');
const router = express.Router();
const authentification = require('../middlewares/authentification');
const { createUser, getUsers,getUser,
        editUser, deleteUser, patchUser,getUserMe,
        loginUser,logoutUser,logoutUserAll } = require('../controllers/users.controller');

router.get("/", authentification,getUsers);
router.get("/me", authentification,getUserMe);
router.get("/:id",getUser);

router.post("/",createUser);
router.post('/login',loginUser);
router.post('/logout',authentification,logoutUser);
router.post('/logout/all',authentification,logoutUserAll);

router.patch("/me",authentification,patchUser);
router.delete("/me",authentification,deleteUser);
router.put("/:id",editUser);

module.exports = router;
