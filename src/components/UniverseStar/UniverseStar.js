import React from 'react';
import {
    Link
} from "react-router-dom";
import {HARRY_POTTER, GAME_OF_THRONES, BACK_TO_THE_FUTURE} from '../../constants/universe';
import '../UniverseStar/style.css';

export const UniverseLeftCard = ({id, image, logo, label, description}) => (
<Link to={`/universe/${id}`} className='card'>
       <img src={`/img/${image}`} alt='' className='img'/>
       <div className='left-text-card'>
           <img src={`/img/${logo}`} alt='' className='logo'/> 
           <h2 className='title'>Les figurines Funko Pop {label}</h2>
    <p className='description'>{description}</p>
    <div className='link-universe'>Voir la collection</div>
       </div>
    </Link>
)

export const UniverseRightCard = ({id, image, logo, label, description}) => (
    <Link to={`/universe/${id}`} className='card'>
       <div className='right-text-card'>
           <img src={`/img/${logo}`} alt='' className='logo'/> 
           <h2 className='title'>Les figurines Funko Pop {label}</h2>
    <p className='description'>{description}</p>
    <div className='link-universe'>Voir la collection</div>
       </div>
    <img src={`/img/${image}`} alt='' className='img'/>
    </Link>
)

const UniverseStar = () => (
    <>
    <h2 style={{padding: '20px'}}>Quelques univers Funko ...</h2>
    {HARRY_POTTER.map(({id, image, logo, label, description})=><UniverseLeftCard id={id} image={image} logo={logo} label={label} description={description} />)}
    
    {GAME_OF_THRONES.map(({id, image, logo, label, description})=><UniverseRightCard id={id} image={image} logo={logo} label={label} description={description} />)}

    {BACK_TO_THE_FUTURE.map(({id, image, logo, label, description})=><UniverseLeftCard id={id} image={image} logo={logo} label={label} description={description} />)}
    </>
)

export default UniverseStar