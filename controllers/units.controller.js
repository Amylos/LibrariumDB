const unitModel = require('../models/units.model');


module.exports.getUnits = async (req, res) => {
    try {
        const units = await unitModel.find(); // Récupère toutes les unités
        return res.status(200).json(units); // Retourne les unités
    } catch (err) {
        console.error(err);
        return res.status(200).json(units); // Retourne les unités
    }
};

module.exports.getUnitById = async (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'unité

    try {
        const unit = await unitModel.findById(id); // Trouve l'unité par ID

        if (!unit) {
            return res.status(404).json({ message: "Unit not found" }); // Si l'unité n'est pas trouvée
        }

        return res.status(200).json(unit); // Retourne l'unité
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching unit", error: err });
    }
};


module.exports.getUnitByName = async (req, res) => {
    const { name } = req.params; // Récupère le nom de l'unité à partir des paramètres

    try {
        const unit = await unitModel.findOne({ unite: name }); // Utilise le champ "unite" pour la recherche

        if (!unit) {
            return res.status(404).json({ message: "Unit not found" }); // Si l'unité n'est pas trouvée
        }

        return res.status(200).json(unit); // Retourne l'unité trouvée
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error fetching unit", error: err });
    }
};



module.exports.createUnit = async (req, res) => {
    try {
        // Vérifie si le corps de la requête est présent
        if (!req.body) {
            return res.status(400).json({ message: "Body is missing" });
        }

        // Récupération des données de l'unité depuis le corps de la requête
        const {
            listName,
            faction,
            unite,
            type,
            points,
            figurines,
            stats,
            armes,
            aptidudes,
            aptidudes_base,
            mots_cles
        } = req.body;

        // Création d'une nouvelle unité avec les données reçues
        const unit = await unitModel.create({
            listName,
            faction,
            unite,
            type,
            points,
            figurines,
            stats,
            armes,
            aptidudes,
            aptidudes_base,
            mots_cles
        });

        // Envoi de la réponse avec l'unité créée
        res.status(201).json(unit); // Code 201 pour indiquer que la ressource a été créée avec succès
    } catch (err) {
        // En cas d'erreur, renvoie une réponse avec l'erreur
        res.status(500).json({ message: "Error creating unit", error: err });
    }
};


module.exports.editUnit = async (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'unité à modifier
    const updates = req.body; // Récupère les nouvelles données

    try {
        // Trouver l'unité par ID et mettre à jour
        const unit = await unitModel.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        
        if (!unit) {
            return res.status(404).json({ message: "Unit not found" }); // Si l'unité n'est pas trouvée
        }

        return res.status(200).json(unit); // Retourne l'unité mise à jour
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating unit", error: err });
    }
};


module.exports.deleteUnit = async (req, res) => {
    const { id } = req.params; // Récupère l'ID de l'unité à supprimer

    try {
        // Supprime l'unité par ID
        const deletedUnit = await unitModel.findByIdAndDelete(id);

        if (!deletedUnit) {
            return res.status(404).json({ message: "Unit not found" }); // Si l'unité n'est pas trouvée
        }

        return res.status(200).json({ message: "Unit deleted successfully" }); // Confirmation de la suppression
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting unit", error: err });
    }
};


