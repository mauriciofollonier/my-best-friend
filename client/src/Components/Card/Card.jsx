import React from 'react';
import './Card.css';

// Como le pasamos: name, image por 'props' no necesito traerme ningun
// estado porque ya tengo la logica en el componente HOME.
export default function Card ({id , name, image, temperament, temperaments, weight}) {

  
  return (
      <div>
          <h3>{name}</h3>

          <img className='dogImg' src={image} alt="img not found"/>
          <hr />
          <h4>{ temperament ? 
          <ul>
          {temperament.map((temp, id) => (
            <li key={id}>{temp}</li>
          ))} 
          </ul> :
          <ul>
          {temperaments?.map((t, id) =>
            <li key={id}>{t.name}</li>
          )} 
          </ul>
           }

          </h4>
          <h4>{weight[1] ? + weight[0] + " to " + weight[1] + "Kgs": weight[0] + "Kgs"} </h4>
          
        
      </div>
  )
  
}