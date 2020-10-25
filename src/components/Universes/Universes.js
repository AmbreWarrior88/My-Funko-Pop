import React, { useEffect, useState } from "react";
import {
    Link, useHistory
} from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import '../Universes/style.css';
import axios from "axios";
import ButtonBack from "../ButtonBack";

export const Universes = () => {
    const [universesList, setUniversesList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/universes");
            setUniversesList(response.data);
        }
        fetchData();
    }, []);
    

    return (
        <>
                 {universesList.map((e) => (
                <Link
                        to={`/universe/${e._id}`}
                        style={{ textDecoration: "none" }}
                        key={e.name}
                    >
                <div className='universe'>
                    <img src={`/img/${e.img}`} alt={e.title}/>
                    <p>{e.title}</p>
                </div>
                </Link>
            ))}
           </>
    );
};

export const UniversesPage =()=>{

    return(
    <div>
              <div style={{display:'flex', flexFlow:'wrap',justifyContent:'center', margin:'20px'}}>
              <Universes/>
             </div>
             <div style={{marginLeft: '44%'}}>
             <ButtonBack history={'/'}/>
             </div>
           </div>
    )
}

const UniversesHome =()=>(
    <>
    <h2 style={{padding: '20px'}}>Tous les univers</h2>
        <div
        className='universes'
        >
            <Tabs variant="scrollable"
          scrollButtons="auto">
             <Universes/>
          </Tabs>
           </div>
           </>

    )


export default UniversesHome;
