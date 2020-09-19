import React from 'react';
import HeaderBottom from '../components/HeaderBottom.js/headerBottom';
import FunkoStar from '../components/FunkoStar/FunkoStar';
import Favorite from '../components/Favorite';
import UniversesHome from '../components/Universes/Universes';

const HomePage = () => {
    return (
        <>
        <HeaderBottom/>
            <UniversesHome />
           <FunkoStar/>
           <Favorite/>
        </>
    )
}

export default HomePage;