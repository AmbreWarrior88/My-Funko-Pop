import React from 'react';
import HeaderBottom from '../components/HeaderBottom.js/headerBottom';
import FunkoStar from '../components/FunkoStar/FunkoStar';
import Favorite from '../components/Favorite';
import UniversesHome from '../components/Universes/Universes';
import UniverseStar from '../components/UniverseStar/UniverseStar';

const HomePage = () => {
    return (
        <>
        <HeaderBottom/>
        <UniverseStar/>
           <FunkoStar/>
            <UniversesHome />
           <Favorite/>
        </>
    )
}

export default HomePage;