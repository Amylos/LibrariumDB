
const armyModel = require('../models/armies.model');



module.exports.getArmiesByFaction = async(req,res) =>{
    const {faction} = req.body;
    try{
        const armies = await armyModel.find({faction:faction});
        if(!armies) return res.status(400).json('armies not find');
        res.status(200).json(armies);
    }
    catch(err){
        res.status(400).json(err);
    }
}

module.exports.getArmies = async(req,res) =>{
    try{
        const armies = await armyModel.find();
        if(!armies) return res.status(400).json('armies not find');
        res.status(200).json(armies);
    }
    catch(err){
        res.status(400).json(err);
    }
}

module.exports.createArmy = async(req,res) =>{
    const { faction, name,rules } = req.body;
    try {
        const newArmy = new armyModel({ faction, name,rules });
        const savedArmy = await newArmy.save();
        return res.status(201).json(savedArmy);
    } catch (error) {
        console.error('Error creating army:', error);
        return res.status(500).json({ success: false, message: 'Erreur lors de la création de l’armée', error });
    }
}

module.exports.editArmies = async(req,res) =>{
    const { armyId } = req.params;
    const updatedData = req.body;
    try {
        const updatedArmy = await Army.findByIdAndUpdate(armyId, updatedData, { new: true });
        if (!updatedArmy) {
            return res.status(404).json({ success: false, message: 'Armée introuvable' });
        }
        return res.status(200).json({ success: true, data: updatedArmy });
    } catch (error) {
        console.error('Error updating army:', error);
        return res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour de l’armée', error });
    }
}

module.exports.deleteArmies = async(req,res) =>{
    const { armyId } = req.params;
    try {
        const deletedArmy = await armyModel.findByIdAndDelete(armyId);
        if (!deletedArmy) {
            return res.status(404).json({ success: false, message: 'Armée introuvable' });
        }
        return res.status(200).json({ success: true, message: 'Armée supprimée avec succès' });
    } catch (error) {
        console.error('Error deleting army:', error);
        return res.status(500).json({ success: false, message: 'Erreur lors de la suppression de l’armée', error });
    }
}