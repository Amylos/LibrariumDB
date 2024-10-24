// getDetachments,getDetachmentById,getDetachmentByName,
//         createDetachment,editDetachment,deleteDetachment

const detachmentModel = require ('../models/detachments.model');


module.exports.getDetachments = async (req,res)=>{
    try{
        const detachments = await detachmentModel.find();
        return res.status(200).json(detachments); // Retourne les detachments

    }
    catch(err){
        return res.status(400).json(err); // Retourne l'erreur
    }
};


module.exports.createDetachment = async (req, res) => {
    try {
        // Destructuration des propriétés nécessaires à partir de req.body
        const { name, faction, army, rules, optimisations, stratagems } = req.body;

        // Crée un nouvel objet détachement avec les données destructurées
        const newDetachment = new detachmentModel({
            name,
            faction,
            army,
            rules,
            optimisations,
            stratagems
        });

        // Enregistre le détachement dans la base de données
        await newDetachment.save();

        // Retourne le détachement créé avec un statut 201 (Created)
        return res.status(201).json(newDetachment);
    } catch (err) {
        // Gère les erreurs, y compris les erreurs de validation
        console.error(err);
        return res.status(400).json({ message: "Error creating detachment", error: err });
    }
};


module.exports.editDetachment = async (req, res) => {
    const { id } = req.params; // Récupère l'ID du détachement à modifier
    const updates = req.body; // Récupère les données à mettre à jour

    try {
        // Met à jour le détachement avec les nouvelles données
        const updatedDetachment = await detachmentModel.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedDetachment) {
            return res.status(404).json({ message: "Detachment not found" }); // Si le détachement n'est pas trouvé
        }

        return res.status(200).json(updatedDetachment); // Retourne le détachement mis à jour
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error updating detachment", error: err });
    }
};


module.exports.deleteDetachment = async (req, res) => {
    const { id } = req.params; // Récupère l'ID du détachement à supprimer

    try {
        const deletedDetachment = await detachmentModel.findByIdAndDelete(id); // Supprime le détachement par ID

        if (!deletedDetachment) {
            return res.status(404).json({ message: "Detachment not found" }); // Si le détachement n'est pas trouvé
        }

        return res.status(200).json({ message: "Detachment deleted successfully" }); // Confirme la suppression
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Error deleting detachment", error: err });
    }
};

