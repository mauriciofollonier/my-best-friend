import axios from 'axios';

import Swal from 'sweetalert2';

import { GET_DOGS, 
         GET_TEMPERAMENTS,
         GET_DOGS_BY_NAME,
         GET_DOG_DETAIL,
         FILTER_BY_TEMPERAMENT, 
         FILTER_CREATED,
         ORDER_BY_NAME,
         ORDER_BY_WEIGHT,

         URL_DOGS,
         URL_DOGS_BY_NAME,
         URL_DOG_CREATED,
         URL_DOG_DETAIL,
         URL_TEMPERAMENTS, 
         CLEAN_FILTERS } from '../assets/constants';

export const getDogs = () => {

    return async function ( dispatch ) {
    
        const json = await axios.get( URL_DOGS );
        
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export const getTemperaments = () => {

    return async function ( dispatch ) {

        const temperaments = await axios.get( URL_TEMPERAMENTS );

        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: temperaments.data
        })
    }
}

export const postDog = ( payload ) => {

    return async function () {
    
        try {

            await axios.post( URL_DOG_CREATED, payload );
            Swal.fire('Success', 'Breed created', 'success' );
        }
        catch ( error ) {

            console.log( error );
            Swal.fire(
                'Error', 
                'Some info is incorrect, please check form again', 
                'error' 
            );
        }
    }
}
export const getDogDetail = ( id ) => {

    return async function ( dispatch ) {

        try {
            const json = await axios.get( URL_DOG_DETAIL + id );
            return dispatch({
                type: GET_DOG_DETAIL,
                payload: json.data
            })
        } catch ( error ) {
            console.log( error );
            
        }
    }
}

export const getDogsByName = ( name ) => {

    return async function ( dispatch ) {
        try {
            const json = await axios.get( URL_DOGS_BY_NAME + name );

            return dispatch ({
                type: GET_DOGS_BY_NAME,
                payload: json.data
            })
        } catch ( error ) {
            console.log( error );
            Swal.fire(
                'Error', 
                'The breed you are looking for does not exist', 
                'error' 
            );
        }
    }
}

// Filters

export const filterDogsByTemperament = ( payload ) => {

    return {
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}

export const filterCreated = ( payload ) => {
    return {
        type: FILTER_CREATED,
        payload
    }
}


export const orderByName = ( payload ) => {

    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderByWeight = ( payload ) => {

    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

export const cleanFilters = () => {

    return {
        type: CLEAN_FILTERS,
    }
}

