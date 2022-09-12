const { Router } = require('express');
const { createNewDog } = require('../controllers/breeds/dog.js');

const router = Router();

router.post( '/', createNewDog );








module.exports = router;