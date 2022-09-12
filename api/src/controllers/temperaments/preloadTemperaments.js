const axios = require('axios');
const { response } = require('express');

const { Temperament } = require('../../db');


const preloadTemperaments = async ( req, res = response ) => {

    try {
        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
        
        let tempStr = data.reduce( ( acc, breed ) => {
            
            return acc = acc.concat( breed.temperament && breed.temperament.replace(/ /g, "") + "," )
            
        }, '');
        
            tempStr = tempStr.split(',');
            tempStr = tempStr.map( t => t?.trim() );
            tempStr = tempStr.filter( ( valor, indice ) => {

                return tempStr.indexOf(valor) === indice 
                       && !valor.includes('undefined')
                       && valor !== "";
              }
            );
            tempStr.map( async t => {

                await Temperament?.findOrCreate({
                    where: {
                    name: t && t
                    }
                });
            });
            // res.status(200).json( tempStr );

    } catch (error) {

        console.log( error);

    }

}

module.exports = {
    preloadTemperaments
}