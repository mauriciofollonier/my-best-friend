const { Router } = require('express');
const { Op } = require('sequelize');
const { Dog, Temperament } = require('../db.js');
const axios = require('axios');
const router = Router();
const { splitByScript, splitByColon } = require('../tools/tools.js');


/********************** [ ] GET /dogs: ************************/
/********************** [ ] GET /dogs?name=***: ***************/

router.get('/', async (req, res) => {
console.log("Entre a la ruta del get")
    const {name} = req.query;

    if (name) { // Si me pasan un nombre...
        try { 
            console.log(name)
       
        // 1.- Traigo todo lo de la BdD.
        var dogsBreedByNameBdD = await Dog.findAll({
          include: {
            model: Temperament,
              attributes: {
                include: ['name'], 
              },
              through: {
                attributes:[]
              }
          }
        })
         // 2.- Traigo todo lo de la API.
        let dogsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
        let dogsBreedByNameAPI = dogsApi.data.map(d => {
            
            return { 
                id: d.id, 
                name: d.name, 
                height: splitByScript(d.height.metric), 
                weight: splitByScript(d.weight.metric), 
                life_span: splitByScript(d.life_span),
                image:d.image.url,
                temperament: splitByColon(d.temperament)
            } 
          
        })
        let allDogsBreedByName = await Promise.all([dogsBreedByNameBdD])
          .then((results) => {
            const [dogsBreedsByNameBdD] = results;
            const response = dogsBreedsByNameBdD.concat(dogsBreedByNameAPI)
            return response;
          })
        // Filtro de todas las razas (allDogsBreedByName) las que coincidan con el nombre pasado por query.
        let result = []
        for (let i = 0; i < allDogsBreedByName.length; i++){
          if(allDogsBreedByName[i].name.toLowerCase().includes(name.toLocaleLowerCase())){
           result.push(allDogsBreedByName[i])
          }}
        // Devuelvo los resultados.
        res.send(result).status(200)       
  
    } catch (err) {
       res.sendStatus(404).send("Breed not found")
    }
     }
    // Nombre de raza a encontrar.
    /* if (name) { // Si me pasan un nombre...
        try { 
            console.log(name)
        // 1.- Busco si ese nombre esta en la BdD.
        let dogsBreedByNameBdD = await Dog.findAll({
            include:{
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: [],
                  },
            },
        })
        // 2.- Sino busco ese nombre en la Api.
        let dogsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
        let dogsBreedByNameAPI = dogsApi.data.map(d => {
            
            return { 
                id: d.id, 
                name: d.name, 
                height: splitByScript(d.height.metric), 
                weight: splitByScript(d.weight.metric), 
                life_span: splitByScript(d.life_span),
                image:d.image.url,
                temperament: splitByColon(d.temperament)
            } 
          
        })
        // Filtro de todas las razas las que coincidan con el nombre pasado por query.
        dogsBreedByNameAPI = dogsBreedByNameAPI.filter(d =>  
            d.name.toLowerCase().includes(
            name.toLocaleLowerCase())
            )
        //console.log(dogsBreedByNameAPI)
        res.json(dogsBreedByNameAPI)
        
        
      
    } catch (err) {
       res.sendStatus(404).send("Breed not found")
    }
     } */ else { // Si no pasan un nombre, traeme todo.
        // API
        
        try {
        let dogsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
        let allApiDogs = dogsApi.data.map(d => {
            return { 
                id: d.id, 
                name: d.name, 
                height: splitByScript(d.height.metric), 
                weight: splitByScript(d.weight.metric), 
                life_span: splitByScript(d.life_span),
                image:d.image.url,
                temperament: splitByColon(d.temperament)
            }
        })
        // BdD
        let allDbDogs = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        }) 
        console.log("Entre a get/dogs sin nombre: " + allDbDogs)
        /* allDbDogs = allDbDogs.map((d => {
            return { 
                id: d.id, 
                name: d.name, 
                height: d.height, 
                weight: d.weight, 
                life_span: d.life_span,
                image:d.image,
                temperament: d.temperament
            }
        })) */
        console.log("Esto es allDbDogs: " + allDbDogs)

        let allDogs = allApiDogs.concat(allDbDogs)
        res.json(allDogs)
       } catch (err) {
       res.sendStatus(404)
       }
      }
    })

/********************** [ ] GET /dogs/:id***: ***************/

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            console.log(id.length)
            if (id.length < 4) {
                let dogsApi = await axios.get('https://api.thedogapi.com/v1/breeds');
                let allApiDogs = dogsApi.data.map(d => {
                    return { 
                        id: d.id, 
                        name: d.name, 
                        height: splitByScript(d.height.metric), 
                        weight: splitByScript(d.weight.metric), 
                        life_span: splitByScript(d.life_span),
                        image:d.image.url,
                        temperament: splitByColon(d.temperament)
                    }
                })
                
                // Filtro de todos los perros los que coincidan con el id
                // que recibo por params.
                let targetBreedId = allApiDogs.filter(d => d.id == id);
                //console.log(targetBreedId)
            
                targetBreedId ? 

                res.json(targetBreedId).sendStatus(200) :

                res.sendStatus(404)
            } else {
                let targetDog;
                targetDog = await Dog.findOne({
                    where: {
                        id: id
                    },
                    include: Temperament
                }).then(d => {
                    return (
                        [{id: d.id, 
                        name: d.name, 
                        height: d.height, 
                        weight: d.weight, 
                        life_span: d.life_span,
                        image:d.image,
                        temperament: d.temperaments.map(t=>t.name)}]
                    )
                })
                res.json(targetDog).sendStatus(200);
            }
        } else {
            res.sendStatus(400).send('Necessary params is not provided')
        }
    }
    catch (err) {
        res.sendStatus(404);
    }

})



module.exports = router;