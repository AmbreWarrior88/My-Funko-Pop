import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
/* import data from '../data/data.json'; */

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 800,
        backgroundColor: theme.palette.background.paper,
        margin: 30,
    },
    numberAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    priceAvatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: 'green',
    },
}));


const FunkosList = () => {

    const classes = useStyles();
    const { universeId } = useParams();

    const [funkosList, setFunkosList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:4000/funkos/${universeId}`);
            setFunkosList(response.data);
        }
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                funkosList.map(e => {
                    return <List className={classes.root} key={e._id}>
                        <ListItem>
                            <img src={`/img/funko/${e.img}`} alt={e.universe} style={{ height: '150px' }} />
                            <ListItemAvatar>
                                <Avatar className={classes.numberAvatar}>
                                    {e.number}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${e.name} - ${e.edition}`}
                                secondary={`Date d'achat : ${e.buy} - Prix d'achat : ${e.price} €`} />
                            <Avatar className={classes.priceAvatar}>
                                {`${e.newPrice} €`}
                            </Avatar>
                        </ListItem>
                        
                    </List>
                })

            }
        </div>
    )
}

export default FunkosList;