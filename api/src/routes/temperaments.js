const { Router } = require('express');
const router = Router()
const axios = require('axios');
const { Temperament } = require('../db.js');


router.get('/', async(req, res) => {


    try {
        var {data} = await axios.get('https://api.thedogapi.com/v1/breeds')
        var temperaments = []
        data.forEach(e => {
            if(typeof(e.temperament) === "string"){
                let res = e.temperament.split(",")
                res = res.map(e => e.trim())
                temperaments = temperaments.concat(res)
            }
        });
        temperaments = Array.from(new Set(temperaments)).sort() 
       // Set permite almacenar valores únicos de cualquier tipo para sacar los que se repiten.
       // Array.from crea una nueva instancia de Array a partir de un objeto iterable
        for await (var temp of temperaments) {
            Temperament.create({name: temp})
        }
        const allTemperaments = await Temperament.findAll()
        return res.json(allTemperaments).status(200)
    } catch (err) {
        res.sendStatus(404)
    }
    /*  const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
     var temperaments = await temperamentsApi.data.map(el => el.temperament); 
     //!!temperaments && temperaments.split(',');
     if(temperaments.length > 0) {temperaments.split(',');}
     else {return 'temperaments is empty'}
     console.log(temperaments)
     const tempsEach = temperaments.map(arr => { 
       for (var i=0; i < arr.length; i++) return arr[i]
     })                                    
     tempsEach.forEach(el => {
         Temperament.findOrCreate({ 
             where: {name: el}
         })

 })
 const allTemperaments = await Temperament.findAll();
 res.send(allTemperaments); */
})

module.exports = router