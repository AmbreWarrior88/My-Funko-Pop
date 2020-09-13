import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import '../Universes/style.css';
import axios from "axios";

const Universes = () => {
    
    const [universesList, setUniversesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/universes");
            setUniversesList(response.data);
        }
        fetchData();
    }, []);

    return (
        <div
        className='universes'
        >
            <Tabs variant="scrollable"
          scrollButtons="auto">
                 {universesList.map((e) => (
                <Link
                        to={`/universe/${e._id}`}
                        style={{ textDecoration: "none" }}
                    >
                <div className='universe'>
                    <img src={`/img/${e.img}`} alt={e.title}/>
                    <p>{e.title}</p>
                </div>
                </Link>
            ))}
            </Tabs>
           
        </div>
    );
};

export default Universes;
