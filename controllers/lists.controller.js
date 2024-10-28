const listModel = require('../models/lists.model');

// router.get('/',getLists);
// router.get('/:id',getListById);
// router.get('/name/:name',getListByName);
// router.get('/author/:author',getListByAuthor);

// router.post('/:id',createList);
// router.patch('/:id',editList);
// router.delete('/:id', deleteList);


module.exports.getLists = async (req, res) => {
    try {
        const lists = await listModel.find();
        return res.status(200).json(lists);
    } catch (err) {
        return res.status(400).json({ error: 'Erreur lors de la récupération des listes' });
    }
};


module.exports.createList = async (req, res) => {
    try {
        const newList = new listModel(req.body); // Utilise les données du corps de la requête
        const savedList = await newList.save();
        return res.status(201).json(savedList);
    } catch (err) {
        return res.status(400).json({ error: err.message }); // Renvoie le message d'erreur
    }
};



module.exports.editList = async (req, res) => {
    try {
        const { id } = req.params; // Destructuration de l'ID depuis les paramètres de la requête
        const { body } = req; // Destructuration du corps de la requête

        const updatedList = await listModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedList) {
            return res.status(404).json({ error: 'Liste non trouvée' });
        }
        return res.status(200).json(updatedList);
    } catch (err) {
        return res.status(400).json({ error: 'Erreur lors de la mise à jour de la liste' });
    }
};



module.exports.getListById = async(req,res) =>{
    try {
        const userId = req.params.id;
        const lists = await listModel.find({ userId: userId });

        if (!lists) {
            return res.status(404).json({ message: 'Aucune liste trouvée pour cet utilisateur.' });
        }

        res.status(200).json(lists);
    } catch (error) {
        console.error("Erreur lors de la récupération des listes:", error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des listes.' });
    }
}



module.exports.deleteList = async (req, res) => {

};
