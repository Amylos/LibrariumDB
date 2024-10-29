const express = require('express');
const router = express.Router();
const {getLists,getListById,getListByName,getListByAuthor,
        createList,editList,deleteList }  = require("../controllers/lists.controller");

router.get('/',getLists);
router.get('/:id',getListById);
// router.get('/name/:name',getListByName);
// router.get('/author/:author',getListByAuthor);

router.post('/',createList);
router.patch('/:id', editList);
router.delete('/:id', deleteList);


module.exports = router;