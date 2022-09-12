const { Op } = require('sequelize');

const { Dog, Temperament } = require('../db.js');


const getBreedsDb = async ( name = null, id = null ) => {
  
      const breedsDb = await Dog.findAll({
          include: {
            model: Temperament,
              attributes: {
                include: ['name'], 
              },
              through: {
                attributes:[]
              }
          }
        });
  
      return breedsDb;
}

const getBreedsByNameDb = async ( name = null ) => {


    if( name !== null ) {
      
      const targetBreed = await Dog.findAll({

        where: {
            name: { [ Op.iLike ]: `${ name }%` }
        },
        include: {
          model: Temperament,
          attributes: ['name'],
          through: {
              attributes: []
          }
        }
      });

      return targetBreed;
  }

}


const getBreedByIdDb = async ( id = null ) => {

  if( id !== null && id.length > 4 ) {
  
    const targetBreed = await Dog.findByPk( id,
              
                  {
                    include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                  }
                }
    );

    return targetBreed;
  }
}



module.exports = {
    getBreedsDb,
    getBreedsByNameDb,
    getBreedByIdDb
}