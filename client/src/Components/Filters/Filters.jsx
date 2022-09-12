import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTemperaments } from '../../Actions';


export const Filters = ({ created, temperament, name, weight, clean }) => {

  const dispatch = useDispatch();
  const temperaments = useSelector( state => state.temperaments );

  useEffect( () => {

    dispatch( getTemperaments() );
  }, [] );


  return (

    <div className="Filters"> 

      <select 
        defaultValue={'DEFAULT'} onChange={ e => name( e ) }>
        
          
          <option value="DEFAULT" disabled>Order By Name</option>
          <option value='asc'>A - Z</option>
          <option value='desc'>Z - A</option>
      </select>

      <select defaultValue={'DEFAULT'} onChange={ e => weight( e ) }>
          <option value="DEFAULT" disabled>Order By Weight</option>
          <option value='+weight'>Lightest</option>
          <option value='-weight'>Heaviest</option>
      </select>

      <select defaultValue={'DEFAULT'} onChange={(e) => temperament(e)}>
          <option value="DEFAULT" disabled>Filter By Temperament</option>
                { temperaments.map( temp => (
                    
                    <option value={ temp } key={ temp }>
                        { temp }
                    </option>
                ))}
      </select>

      <select defaultValue={'DEFAULT'} onChange={ e => created( e )}>
          
          <option value="DEFAULT" disabled>Filter Created</option>
          <option value='All'>All</option>
          <option value='Created'>Created</option>
          <option value='Existents'>Existing</option>
      </select>

      <button className='btnClean'  onClick={ ( e ) => clean( e ) }>X</button>
    </div>

  )
}
