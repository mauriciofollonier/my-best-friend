import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from '../../Actions/index.js';
import NavBar from '../Home/NavBar';
import './DogDetail.css';


export default function DogDetail({ match }) {
    const { id } = match.params;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetail(id)) // Accedo al id que ingresan por params en el back.
    },[])

    const myDog = useSelector((state) => state.detail);

    if(id.length < 5) {
     // Si la raza ya existe...
    return (
        <div className='detailDiv'>
            <NavBar/>
            {
                myDog.length > 0 ?
                <div className="detailBox">
                        <h2 className="detailH2">{myDog[0].name}</h2>
                        <img className="detailImg" src={myDog[0].image} alt="" width="500" height="400"/>
                        <h3 className="detailH3">Personality of the Breed :{!myDog[0].createdInDb ? myDog[0].temperament + "  " :
                            myDog[0].temperaments.map(t => t.name + (" "))}</h3>
                        <h3 className="detailH3">Life expectancy :{myDog[0].life_span[1] ? myDog[0].life_span[0] +" to "+ myDog[0].life_span[1] + " Years" : myDog[0].life_span[0]} </h3>

                        <h3 className="detailH3">Height :{myDog[0].height[1] ? myDog[0].height[0] +" to "+ myDog[0].height[1] : myDog[0].height[0]} Cms</h3>

                        <h3 className="detailH3">Weight :{myDog[0].weight[1] ? myDog[0].weight[0] +" to "+ myDog[0].weight[1] : myDog[0].weight[0]} Kgs</h3>
                    </div>
                    : <p>Loading...</p>
            }

            {/* <Link to={'/home'}>
            <button className="btnHomeDetail">
             <img src="https://images.squarespace-cdn.com/content/v1/5c7e5d208d97406156f3e83d/1557928940983-FCU91IK7IX3YAYM5AWPW/dog-sleeping.png" width="55px" height="45px" alt="x" />
            </button>
            </Link> */}
        </div>
      )
    }

    else {
        // Si la raza es creada...
        return (
            <div>
                {
                    myDog.length > 0 ?
                        <div className="detailDiv">
    
                            <h2 className="detailH2">{myDog[0].name}</h2>
                            <img className="detailImg" src={myDog[0].image} alt="" width="500" height="400"/>
                            <h3 className="detailH3">Personality of the Breed :{!myDog[0].createdInDb ? myDog[0].temperament + "  " :
                                myDog[0].temperaments.map(t => t.name + (" "))}</h3>
                            <h3 className="detailH3">Life expectancy :{myDog[0].life_span?.split("-")[0] + " to " + myDog[0].life_span?.split("-")[1]} Years</h3>
    
                            <h3 className="detailH3">Height :{myDog[0].height?.split("-")[0] + " to " + myDog[0].height?.split("-")[1]} Cms</h3>
    
                            <h3 className="detailH3">Weight :{myDog[0].weight?.split("-")[0] + " to " + myDog[0].weight?.split("-")[1]} Kgs</h3>
                        </div>
                        : <p>Loading...</p>
                }
    
                {/* <Link to={'/home'}>
                <button className="btnHomeDetail">
                 <img src="https://images.squarespace-cdn.com/content/v1/5c7e5d208d97406156f3e83d/1557928940983-FCU91IK7IX3YAYM5AWPW/dog-sleeping.png" width="55px" height="45px" alt="x" />
                </button>
                </Link> */}
            </div>
          )
        }
}

