import React, { useState } from 'react';
import '../FunkoStar/style.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const FunkoStar =()=>{

    const [favorite, setFavorite] = useState([]);

console.log(favorite);
    return(
    <>
<h2>Les meilleures côtes</h2>
<div className="star-section">
    <div className="star">
        <img src="img/funko/theWitcher/ciri.png" alt=""/>
        <div>
           <h3>Ciri</h3>
    <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite" />}
        onClick={()=> setFavorite({title:'ciri', img: 'img ciri'})}
      /> 
        </div>
    
    <p>Edition</p>
    <div className="price">
        <p>P.A.</p>
        <p>Côte</p>
    </div>
    </div>
    <div className="star">
        <img src="img/funko/disney/samovar.png" alt=""/>
    <h3>Mme Samovar & chip</h3>
    <p>Edition</p>
    <div className="price"> 
        <p>P.A.</p>
        <p>Côte</p>
    </div>
    </div>
</div>
</>
)
    }

export default FunkoStar;