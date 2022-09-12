import { Link } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';

export const Cards = ( { dogs } ) => {


  return (
        <div className="dogsContainer">
            { dogs?.map( dog => {
                return (
                    <div className='dogDiv' key={dog.id}>
                        <Link to={'/home/' + dog.id}>
                            <Card 
                                id={ dog.id } 
                                name={ dog.name } 
                                image={ dog.image } 
                                temperament={ dog.temperament } 
                                temperaments={ dog.temperaments } 
                                weight={ Array.isArray( dog.weight ) ? dog.weight : dog.weight?.split("-") } 
                                weight_min={ dog.weight_min } 
                                weight_max={ dog.weight_max }
                            />
                        </Link>
                    </div>
                )
              }) 
            }
        </div>
  )
}
