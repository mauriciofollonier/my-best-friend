const { Router } = require('express');

const router = Router();

const { getBreedsApi, 
        getBreedsByNameApi,
        getBreedByIdApi } = require('../helpers/getBreedsApi.js');

const { getBreedsDb, 
        getBreedsByNameDb, 
        getBreedByIdDb} = require('../helpers/getBreedsDb.js');




router.get('/', async ( req, res ) => {

    const { name } = req.query;

    if (name) {

        try { 

            // API
            const breedsByNameApi = await getBreedsByNameApi( name );
           
            // DB
            const breedsByNameDb = await getBreedsByNameDb( name );
            
            // All
            const allBreedsByName = breedsByNameApi.concat( breedsByNameDb );

            allBreedsByName.length >= 1 ? 

            res.status(200).json( allBreedsByName ) :

            res.status(404).json( error + "Breed not found")

  
        } catch ( error ) {

            res.status(404).json( error + "Breed not found") 
        }
    } else {
       
        try {
            
            // API
            const breedsApi = await getBreedsApi();
            
            // DB
            const breedsDb = await getBreedsDb();
           
            // All
            const allBreeds = breedsApi.concat( breedsDb );

            res.status(200).json( allBreeds );

        } catch ( error ) {

            console.log( error );
            
            res.status(404).json( error );
        
        }
      }
});


router.get('/:id', async ( req, res ) => {

    try {
        // API
        const targetBreedApi = await getBreedByIdApi( id );

        
        // DB
        const targetBreedDb = await getBreedByIdDb( id );

        // Result
    
        targetBreedApi ? res.status(200).json( targetBreedApi  ) : [];
        targetBreedDb  ? res.status(200).json( targetBreedDb  ) : [];

    } catch ( error ) {
        
        console.log( error );

        res.status(404).json( error );
    }

});



module.exports = router;