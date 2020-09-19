import React, { useState } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const FavoriteIcon = () =>{

    const [favorite, setFavorite] = useState([]);
    const [favoriteIcon, setFavoriteIcon] = useState(false);
    // console.log(favorite, favoriteIcon);

    return(
        <>
{ favoriteIcon ? <Favorite onClick={()=> setFavoriteIcon(false)
               }/> : <FavoriteBorder onClick={()=> {setFavoriteIcon(true)
            //    setFavorite({title:'ciri', img: 'img ciri'})
               }}/> }
</>
    )
}

export default FavoriteIcon;