import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import {HARRY_POTTER, GAME_OF_THRONES, BACK_TO_THE_FUTURE} from '../../constants/universe';
import '../UniverseStar/style.css';
import Grow from '@material-ui/core/Grow';

export const UniverseLeftCard = ({id, image, logo, label, description, checked}) => (
<Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})} >
<Link to={`/universe/${id}`} className='card'>
    <img src={`/img/${image}`} alt='' className='img'/>
       <div className='left-text-card'>
           <img src={`/img/${logo}`} alt='' className='logo'/> 
           <h2 className='title'>Les figurines Funko Pop {label}</h2>
    <p className='description'>{description}</p>
    <div className='link-universe'>Voir la collection</div>
       </div>
</Link>
</Grow>
)

export const UniverseRightCard = ({id, image, logo, label, description, checked}) => (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})} >
    <Link to={`/universe/${id}`} className='card'>
       <div className='right-text-card'>
           <img src={`/img/${logo}`} alt='' className='logo'/> 
           <h2 className='title'>Les figurines Funko Pop {label}</h2>
    <p className='description'>{description}</p>
    <div className='link-universe'>Voir la collection</div>
       </div>
    <img src={`/img/${image}`} alt='' className='img'/>
    </Link>
    </Grow>
)

const UniverseStar = () => {
const [checkedHP, setCheckedHP] = useState(false)
const [checkedBF, setCheckedBF] = useState(false)
const [checkedGT, setCheckedGT] = useState(false)
    return(
    <>
    <h2 style={{padding: '40px'}} >Quelques univers Funko ...</h2>

    <div onMouseMove={()=>setCheckedHP(true)}>
        {HARRY_POTTER.map(({id, image, logo, label, description})=>
          <UniverseLeftCard id={id} image={image} logo={logo} label={label} description={description} checked={checkedHP} />
          )}
    </div>
    <div onMouseMove={()=>setCheckedGT(true)}>
    {GAME_OF_THRONES.map(({id, image, logo, label, description})=><UniverseRightCard id={id} image={image} logo={logo} label={label} description={description} checked={checkedGT}/>)}
</div>
<div onMouseMove={()=>setCheckedBF(true)}>
    {BACK_TO_THE_FUTURE.map(({id, image, logo, label, description})=><UniverseLeftCard id={id} image={image} logo={logo} label={label} description={description} checked={checkedBF}/>)}
    </div>
    </>
)
} 

export default UniverseStar