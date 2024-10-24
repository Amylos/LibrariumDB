const express = require('express');
const router = express.Router();
const { getUnits, createUnit, deleteUnit,
     editUnit, getUnitById,getUnitByName } = require('../controllers/units.controller');

router.get('/', getUnits); // Récupère toutes les unités
router.get('/:id', getUnitById); // Récupère une unité par ID
router.get('/name/:name', getUnitByName); // Récupère une unité par le nom d'unité

router.post('/', createUnit); // Crée une nouvelle unité
router.delete('/:id', deleteUnit); // Supprime une unité par ID
router.patch('/:id', editUnit); // Modifie une unité par ID

module.exports = router;