import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from '../../Actions/index.js';
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import './DogDetail.css';


export default function DogDetail({ match }) {
    const { id } = match.params;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogDetail(id)) // Accedo al id que ingresan por params en el back.
    },[id, dispatch])

    const myDog = useSelector((state) => state.detail);

    if(id.length < 5) {
     // Si la raza ya existe...
    return (
        <div className='detailDiv'>
            <div className="MenuDetail">
                <a className="Title" href='/home'>
                   <SiDatadog/>
                   <h1>GoBack</h1>
                </a>
            </div>
            {
                myDog.length > 0 ?
                <div className='Main'>
                <div className="detailBox">
                    <h2 className="breedName">{myDog[0].name}</h2>
                    <img className="detailImg" src={myDog[0].image} alt="" width="500" height="400"/>
                    <div className="divInfo">
                        <table>
                            <thead>
                                <tr>
                                    <td className='detailName'>Personality</td>
                                        <td>{!myDog[0].createdInDb ? myDog[0].temperament?.join(', ') : myDog[0].temperaments.map(t => t.name)}</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Life span</td><td>{myDog[0].life_span[1] ? myDog[0].life_span[0] +" to "+ myDog[0].life_span[1] + " Years" : myDog[0].life_span[0]}</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Height</td><td>{myDog[0].height[1] ? myDog[0].height[0] +" to "+ myDog[0].height[1] : myDog[0].height[0]} Cms</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Weight</td><td>{myDog[0].weight[1] ? myDog[0].weight[0] +" to "+ myDog[0].weight[1] : myDog[0].weight[0]} Kgs</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    </div>
                </div>
                    : <div className='Main'>
                        <div className='preloaderDetail'></div>
                    </div>
            }
            <div className='Footer'>
                <p>Developed by Mauricio Follonier </p>
                <a href="https://github.com/mauriciofollonier/">
                    <VscGithub className='footerIcon'/>
                </a>

                 <a href="https://www.linkedin.com/in/mauricio-damian-follonier/">
                    <SiLinkedin className='footerIcon'/>
                </a>
            </div>
        </div>
      )
    }

    else {
        // Si la raza es creada...
        return (
            <div className='detailDiv'>
              <div className="MenuDetail">
              <a className="Title" href='/home'>
                   <SiDatadog/>
                   <h1>MyBestFriend</h1>
                </a>
              </div>
                {
                   /*  myDog.length > 0 ?
                    <div className='Main'>
                        <div className="detailBox">
                            <h2 className="detailH2">{myDog[0].name}</h2>
                            <img className="detailImg" src={myDog[0].image} alt="" width="500" height="400"/>
                            <ul>
                                <li><h4 className="detailH3">Personality</h4>
                                    <p>{!myDog[0].createdInDb ? myDog[0].temperament + "  " :
                                    myDog[0].temperaments.map(t => t.name + (" "))}
                                    </p>
                                </li>
                                <li> <h3 className="detailH3">Life expectancy :{myDog[0].life_span?.split("-")[0] + " to " + myDog[0].life_span?.split("-")[1]} Years</h3>
                                </li>
                                <li><h3 className="detailH3">Height :{myDog[0].height?.split("-")[0] + " to " + myDog[0].height?.split("-")[1]} Cms</h3>
                                </li>
                                <li><h3 className="detailH3">Weight :{myDog[0].weight?.split("-")[0] + " to " + myDog[0].weight?.split("-")[1]} Kgs</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                        : */ <div className='Main'>
                            <div className='preloaderDetail'></div>
                        </div>
                }
                 <div className='Footer'>
                <p>Developed by Mauricio Follonier </p>
                <a href="https://github.com/mauriciofollonier/">
                    <VscGithub className='footerIcon'/>
                </a>

                 <a href="https://www.linkedin.com/in/mauricio-damian-follonier/">
                    <SiLinkedin className='footerIcon'/>
                </a>
                </div>
            </div>
          )
        }
}

