const axios = require('axios');

const { Temperament } = require('../../db.js');


const getTemperaments = async ( req, res ) => {

    try {
        
        const allTemperaments = await Temperament.findAll({ 
            attributes: ["name"], 
            order: [['name', 'ASC']]
          });
        const arrayDbTemperaments = allTemperaments.map((e) => e.name);

        return res.status(200).json( arrayDbTemperaments );

    } catch ( error ) {

        console.log( error );

        res.status(404);
    }
    
}

module.exports = {
    getTemperaments
}