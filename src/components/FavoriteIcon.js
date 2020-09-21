import React, { useEffect, useState } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const FavoriteIcon = (props) =>{

    const [favorite, setFavorite] = useState([]);
    const [favoriteIcon, setFavoriteIcon] = useState(false);

    useEffect(()=>{
console.log(favorite, favoriteIcon);
    },[favorite, favoriteIcon]);
    

    return(
        <>
        { favoriteIcon ? <Favorite onClick={()=> setFavoriteIcon(false)
               }/> : <FavoriteBorder onClick={()=> {setFavoriteIcon(true);
                setFavorite(props.name)
               }}/> }
        </>
    )
}

export default FavoriteIcon;