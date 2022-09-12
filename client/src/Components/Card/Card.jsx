
import './Card.css';

export const Card = ({ name, 
                       image, 
                       temperament, 
                       temperaments, 
                       weight, 
                       weight_min, 
                       weight_max }) => {

  return (
    <div className='cardContain'>
        <h3>{ name }</h3>

        <img className='dogImg' src={ image } alt="img not found"/>
        <hr />
        { 
          temperament ? 
            <ul>
              { 
                temperament.map( temp => (

                  <li key={ temp }>{ temp }</li>

                ))
              } 
            </ul> 
            :
            <ul>
              {
                temperaments.map( t  =>

                  <li key={ t.id }>{ t.name }</li>

                )
              } 
            </ul>
        }
          {
            !weight_min ?
            <h4>{ weight[1] ? weight[0] + " - " + weight[1] + " Kgs": weight[0] + " Kgs" }</h4>
            :
            <h4>{ weight_max ? weight_min + " - " + weight_max + " Kgs": weight_min + " Kgs" }</h4>
          }
    </div>
  )
  
}