const { response } = require('express');
const { Dog } = require('../../db.js');

const createNewDog = async ( req, res = response ) => {

    const {name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span_min,
        life_span_max,
        image,
        temperament
        } = req.body;

        try {
            let dogCreated = await Dog.findOrCreate ({
                
                where: { name },
                defaults: {
                    height_min,
                    height_max,
                    weight_min,
                    weight_max,
                    life_span_min,
                    life_span_max,
                    image,
                }
            });

            temperament.forEach( async temp => {

                await dogCreated[0].addTemperaments( temp )

            });

            res.status(200).json( dogCreated );

        } catch ( error ) {
    
            console.log( error );

            res.status(500).send( error );
        };

}








module.exports = {
    createNewDog
}