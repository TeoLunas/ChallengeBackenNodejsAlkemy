const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Home Characters')
});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;