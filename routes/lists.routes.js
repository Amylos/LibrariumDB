const express = require('express');
const router = express.Router();
const {getLists,getListById,getListByName,getListByAuthor,
        createList,editList,deleteList }  = require("../controllers/lists.controller");

router.get('/',getLists);
// router.get('/:id',getListById);
// router.get('/name/:name',getListByName);
// router.get('/author/:author',getListByAuthor);

router.post('/',createList);
router.patch('/:id',editList);
router.delete('/:id', deleteList);


// router.get('/faction/:faction', getListsByFaction);
// router.get('/army/:army', getListsByArmy);
// router.get('/:id/units', getUnitsByListId);
// router.post('/:id/units', addUnitToList);
// router.patch('/:listId/units/:unitId', editUnitInList);
// router.delete('/:listId/units/:unitId', deleteUnitFromList);
// router.get('/count', getTotalListsCount);
// router.get('/author/:author/paginate', getListsByAuthorWithPagination);




module.exports = router;