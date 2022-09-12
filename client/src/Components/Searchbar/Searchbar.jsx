
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BsSearch } from 'react-icons/bs';
import { getDogsByName } from '../../Actions';
import './Searchbar.css';

export const Searchbar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState("") // Estado local. Aca va lo que escriban en el input.

    const handleInputChange = ( e ) => {

    e.preventDefault();
    setName(e.target.value);
    }
    
    const handleSubmit = ( e ) => {

        e.preventDefault();
        dispatch( getDogsByName( name ) );
    }

    return (
        <>
        <div className="divSearchBar">
            <input
                className="inputSearchBar"
                onChange={ ( e ) => handleInputChange( e ) }
                type='text'
                placeholder='Breed Name...'
            />
            <button
                className="btnSearchBar"
                type='submit'
                onClick={ ( e ) => handleSubmit( e ) }>
                <BsSearch/>
            </button>
            
        </div>
        </>
    )
}