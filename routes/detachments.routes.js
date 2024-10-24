const express = require('express');
const router = express.Router();
const {getDetachments,getDetachmentById,getDetachmentByName,
        createDetachment,editDetachment,deleteDetachment }  = require("../controllers/detachments.controller");

router.get('/',getDetachments);
// router.get('/:id',getDetachmentById);
// router.get('/name/:name',getDetachmentByName);

router.post('/',createDetachment);
router.patch('/:id',editDetachment);
router.delete('/:id', deleteDetachment);


module.exports = router;