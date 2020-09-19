import React, { useEffect, useState } from 'react';
import '../FunkoStar/style.css';

import Axios from 'axios';
import FavoriteIcon from '../FavoriteIcon';

const FunkoStar =()=>{

    const [funkoStar, setFunkoStar] = useState([]);
    const display = funkoStar.slice(1,3);

useEffect(()=>{
    const fetchData = async () => {
        const response = await Axios.get("http://localhost:4000/favorite");
        setFunkoStar(response.data);
    }
    fetchData();
},[]);

    return(
    <>
<h2>Les meilleures côtes</h2>
<div className="star-section">
    {display.map(e=>(
<div className="star">
        <img src={`/img/funko/${e.img}`} alt={e.universe}/>
        <div>
           <h3>{e.name}</h3>
           <FavoriteIcon/>
        </div>
    <p>{e.edition}</p>
    <div className="price">
        <p>{e.price}</p>
        <p>{e.newPrice}</p>
    </div>
    </div>
    )) 
    }
</div>
</>
)
    }

export default FunkoStar;