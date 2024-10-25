const express = require('express');
const router = express.Router();
const {getArmies,createArmy,editArmies,deleteArmies, getArmiesByFaction}  = require("../controllers/armies.controller");

router.get('/',getArmies);
router.get('/faction/:faction',getArmiesByFaction);

router.post('/',createArmy);
router.patch('/:id',editArmies);
router.delete('/:id', deleteArmies);

module.exports = router;