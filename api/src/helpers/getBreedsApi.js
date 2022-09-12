
const axios = require('axios');


const getBreedsApi = async () => {

    try { 

        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
    
        const apiBreeds = data.map( breed => {
    
            return {

                id: breed.id, 

                name: breed.name, 

                height: breed.height.metric?.includes('-') 
                        ? breed.height.metric.split('-').map( e => e.trim() ) 
                        : [ breed.height.metric ], 

                weight: breed.weight.metric?.includes('-') 
                        ? breed.weight.metric.split('-').map(e => e.trim() ) 
                        : [ breed.weight.metric ], 

                life_span: breed.life_span?.includes('-')
                        ? breed.life_span.split('-').filter( life => life !== 'years')
                        : [breed.life_span],

                image: breed.image.url,

                temperament: breed.temperament?.includes(',')
                            ? breed.temperament.split(',').map(e => e.trim() )
                            : [ breed.temperament ]
            }
        });

        return apiBreeds;
       

    } catch ( error ) {

        console.log( error );

    }
}

const getBreedsByNameApi = async( name = null ) => {

    const apiBreeds = await getBreedsApi();

    if( name !== null ) {

        let targetBreeds = [];

        for ( let i = 0; i < apiBreeds.length; i++ ) {

            if( apiBreeds[i].name.toLowerCase().includes( name.toLocaleLowerCase() )) {
  
                targetBreeds.push( apiBreeds[i] );
  
            }}
        
        return targetBreeds;
    }
}

const getBreedByIdApi = async ( id = null ) => {

    console.log("Entre a buscar por id")
    console.log("El id es " + id )

    const apiBreeds = await getBreedsApi();


    if ( id !== null && id.length <= 4 ) {

        const targetBreed = apiBreeds.filter( breed => breed.id == id );

        return targetBreed;

    } else {

        console.log('Breed not found in API with this id')
    }

}




module.exports = {
    getBreedsApi,
    getBreedsByNameApi,
    getBreedByIdApi
}