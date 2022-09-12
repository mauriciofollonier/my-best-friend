import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDogs, 
         filterCreated, 
         filterDogsByTemperament, 
         orderByName, 
         orderByWeight, 
         cleanFilters} from '../../Actions';

import { Navbar } from '../../Components/Navbar/Navbar';
import { Filters } from '../../Components/Filters/Filters';
import { Cards } from '../../Components/Cards/Cards';
import { Loading } from '../../Components/Loading/Loading';
import { Pagination } from '../../Components/Pagination/Pagination';
import { Footer } from '../../Components/Footer/Footer';
import './Home.css';


export const Home = () => {

const dispatch = useDispatch();
const allDogs = useSelector( state => state.dogs ); 

// Pagination
const [  order, setOrder] = useState('');
const [ currentPage , setCurrentPage ] = useState( 1 ); 
const [ dogsPerPage,  setDogsPerPage ] = useState( 12 );
const indexOfLastDog = currentPage * dogsPerPage;
const indexOfFirstDog = indexOfLastDog - dogsPerPage;
const currentDog = allDogs.slice( indexOfFirstDog, indexOfLastDog );

    useEffect(() => {

        dispatch( getDogs() ); 
    }, [ dispatch ] );

    // Change number of page
    const pagination = ( pageNumber ) => {

        setCurrentPage( pageNumber );
    }


    const handleSelect = ( { target } ) => { 

        dispatch( filterDogsByTemperament( target.value ) );
    }

    const handleFilterCreated = ( e ) => {

    e.preventDefault();
    dispatch( filterCreated( e.target.value ) );
    }

    const handleOrderByName = ( e ) => {

        e.preventDefault();
        dispatch( orderByName( e.target.value ) );

        setCurrentPage( 1 );
        setOrder(`Ordened ${ e.target.value }` );
    }

    const handleOrderByWeight = ( e ) => { 

        e.preventDefault();
        dispatch( orderByWeight( e.target.value ) );

        setCurrentPage(1);
        setOrder(`Ordened ${ e.target.value }`);
    }

    function handleCleanFilters( e ) {

        e.preventDefault();
        dispatch( cleanFilters() );
    }


   
 return (
     <div className='divHome'>

            <Navbar />

            <Filters 
                created={ handleFilterCreated }
                temperament={ handleSelect }
                name={ handleOrderByName }
                weight={ handleOrderByWeight }
                clean={ handleCleanFilters }
            />
            
            { 
                currentDog.length > 0 ?
                <div>
                    <Cards dogs={ currentDog }/>
                    <Pagination 
                        dogsPerPage = { dogsPerPage }
                        allDogs = { allDogs.length-1 }
                        pagination = { pagination }
                    />
                </div>           
                : <Loading />
            }

            <Footer />
     </div>
 )
}