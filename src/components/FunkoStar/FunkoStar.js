import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import '../FunkoStar/style.css';

import Axios from 'axios';
import FavoriteIcon from '../FavoriteIcon';

const FunkoStar =()=>{

    const [funkoStar, setFunkoStar] = useState([]);
    const display = funkoStar.slice(1,2);

useEffect(()=>{
    const fetchData = async () => {
        const response = await Axios.get("http://localhost:4000/favorite");
        setFunkoStar(response.data);
    }
    fetchData();
},[]);

    return(
    <div style={{backgroundColor:'#974843', padding:'20px 60px 1px 60px'}}>
<h2 style={{marginLeft:'-20px'}}>Certaines Funko sont exclusives</h2>

    {display.map(e=>(
        <Link to={'/universe/5f469aff24ce95607d5a7ce2'} className='card'>
        <div className='right-text-card' style={{marginRight:'60px'}}> 
            <h2 className='title'>{e.name}</h2>
            <p className='description'>Pour cette figurine exclusive, Aragorn est représenté au moment de son couronnement à la fin de la trilogie. Il porte donc une tenue officielle de cérémonie composée d'une armure en métal argenté extrêmement raffinée et bien détaillée. </p>
     <div className='link-universe'>Voir la collection</div>
        </div>
     <img src={`/img/funko/${e.img}`} alt='' style={{height:'300px', marginBottom:'60px'}} />
     </Link> 
    )) 
    }

</div>
)
    }

export default FunkoStar;