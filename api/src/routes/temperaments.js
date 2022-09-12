const { Router } = require('express');
const router = Router()


const { preloadTemperaments } = require('../controllers/temperaments/preloadTemperaments');
const { getTemperaments } = require('../controllers/temperaments/getTemperaments');


// Temperaments routes

router.post('/preload', preloadTemperaments );

router.get('/', getTemperaments );




module.exports = router;