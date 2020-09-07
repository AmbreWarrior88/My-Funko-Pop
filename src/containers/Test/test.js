import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import '../Test/test.css'

const TestPage = () => {

    return (<>
    <div className='header-test'>
        <h1>Funko POP Collection !</h1>
        <section className='nav-bar'>
        <div className='input-search'>
            <input type="text" placeholder="Search"/>
            <SearchIcon/>
        </div>
            <div className='link'>
            <Link >
            Univers
            </Link>
            <Link >
            Collection
            </Link>
            <Link >
            Favoris
            </Link>
            </div>
        </section>
    </div>
    <div style={{overflow:'hidden'}}>
        <img src='/img/wallpaper/header_background.png' alt='' className='img-collection' style={{maxWidth:'100%'}}/>
    </div>
    <div className='universes'>
        <div className='universe'>
            <img src='/img/funkoBackToTheFuture.png' alt=''/>
            <p>Back To The Future</p>
        </div>
        <div className='universe'>
            <img src='/img/funkoDC.png' alt=''/>
            <p>DC</p>
        </div>
        <div className='universe'>
            <img src='/img/funkoHarryPotter.jpg' alt=''/>
            <p>Harry Potter</p>
        </div>
        <div className='universe'>
            <img src='/img/funkoTheWitcher.png' alt=''/>
            <p>The Witcher</p>
        </div>
        <div className='universe'>
            <img src='/img/funkoLaCasaDePapel.jpg' alt=''/>
            <p>La Casa De Papel</p>
        </div>
    </div>
    <div style={{backgroundColor:'aliceblue', height:'500px'}}>

    </div>
</>)
};

export default TestPage;