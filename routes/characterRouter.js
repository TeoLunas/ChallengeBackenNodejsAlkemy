const express = require('express');
const router = express.Router();

const CharacterService = require('../services/characterService');
const characterService = new CharacterService();


router.get('/', async (req, res) => {
    const listCharacer = await characterService.getAllCharacters(req.query);
    res.json(listCharacer);
});


router.post('/', async (req, res) => {
    const data = req.body;
    const newCharacter = await characterService.createCharacter(data);
    res.json(newCharacter);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const updateCharacter = await characterService.updateCharacter(id, changes);
    res.json(updateCharacter);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteCharacter = await characterService.deleteCharacter(id);
    res.json(deleteCharacter);
});

module.exports = router;