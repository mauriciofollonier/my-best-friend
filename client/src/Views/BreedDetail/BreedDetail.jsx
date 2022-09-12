
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetail } from '../../Actions/index.js';
// import { VscGithub } from "react-icons/vsc";
// import { SiLinkedin } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import './BreedDetail.css';
import { Loading } from '../../Components/Loading/Loading.jsx';
import { Footer } from '../../Components/Footer/Footer.jsx';


export const BreedDetail = ( { match } ) => {

    const { id } = match.params;

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch( getDogDetail( id ) ); 
    },[ id, dispatch ]);

    const myDog = useSelector( state => state.detail );

    if( id.length < 5 ) {  // if breed belongs to API

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
                    <h2 className="breedName">{ myDog[0].name }</h2>
                    <img className="detailImg" src={ myDog[0].image } alt=""/>
                    <div className="divInfo">
                        <table>
                            <thead>
                                <tr>
                                    <td className='detailName'>Personality</td>
                                    <td>{ myDog[0].temperament?.join(', ') }</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Life span</td>
                                    <td>{ myDog[0].life_span[1] ? 
                                          myDog[0].life_span[0] +" to "+ myDog[0].life_span[1] + " Years" : 
                                          myDog[0].life_span[0]}</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Height</td>
                                    <td>{ myDog[0].height[1] ? 
                                          myDog[0].height[0] +" to "+ myDog[0].height[1] : 
                                          myDog[0].height[0] } Cms</td>
                                </tr>
                                <tr>
                                    <td className='detailName'>Weight</td>
                                    <td>{ myDog[0].weight[1] ? 
                                          myDog[0].weight[0] +" to "+ myDog[0].weight[1] : 
                                          myDog[0].weight[0] } Kgs</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    </div>
                </div>
                    : 
                <Loading />
            }

            <Footer />
            
        </div>
      )
    }


    else { // if breed belongs to DB

        return (
            <div className='detailDiv'>
            <div className="MenuDetail">
                <a className="Title" href='/home'>
                   <SiDatadog/>
                   <h1>GoBack</h1>
                </a>
            </div>
                {
                myDog ?

                    <div className='Main'>
                        <div className="detailBox">
                            <h2 className="breedName">{ myDog.name }</h2>
                            <img className="detailImg" src={ myDog.image } alt=""/>
                            
                            <div className="divInfo">
                                <table>
                                    <thead>
                                        <tr>
                                            <td className='detailName'>Personality</td>
                                            <td>{ myDog.temperaments?.map( t => t.name ) }</td>
                                        </tr>
                                        <tr>
                                            <td className='detailName'>Life span</td>
                                            <td>{ myDog.life_span_min + " to "+  myDog.life_span_max + " Years" }</td>
                                        </tr>
                                        <tr>
                                            <td className='detailName'>Height</td>
                                            <td>{ myDog.height_min + " to "+ myDog.height_max } Cms</td>
                                        </tr>
                                        <tr>
                                            <td className='detailName'>Weight</td>
                                            <td>{ myDog.weight_min + " to " + myDog.weight_min } Kgs</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                   : <Loading />
                }
                <Footer />
            </div>
          )
        }
}

