const { Router } = require('express');;
const { Dog, Temperament } = require('../db.js');
const router = Router();



/********************** [ ] POST /dog: **********************/

router.post('/', async (req,res) => {
    const {name,
           height,
           weight,
           life_span,
           image,
           createdInDb,
           temperament
        } = req.body
        console.log(temperament)
try {
    let dogCreated = await Dog.create ({
            name,
            height,
            weight,
            life_span,
            image,
            createdInDb
            
    })
    /* if( typeof temperament === "string") {
        temperament.split(",")
    } */
    let tempsDb = await Temperament.findAll({
        where: {name: temperament}
    })
    dogCreated.addTemperament(tempsDb)
    res.json(dogCreated)
   
    } catch (err) {
        
        res.send(err)
    }
})



module.exports = router;