import React, { useEffect, useState } from 'react';
import {
    useParams, useHistory
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 800,
        backgroundColor: theme.palette.background.paper,
        margin: 30,
        borderRadius: '10px',
        border: '2px solid #fc00fd',
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
    button:{
        backgroundColor: '#fc00fd',
        marginBottom: '20px',
        '&:hover': {
            filter: 'grayscale(20%)',
    }
}
}));


const FunkosList = () => {

    const classes = useStyles();
    const { universeId } = useParams();
    const history = useHistory()

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
                                <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="favorite" />}
      />
                            <Avatar className={classes.priceAvatar}>
                                {`${e.newPrice} €`}
                            </Avatar>
                        </ListItem>
                    </List>
                })

            }
            <Button className={classes.button} variant="contained" color="secondary" startIcon={<ArrowBackIcon/>} onClick={()=> history.push('/')}>
        Back
      </Button>
        </div>
    )
}

export default FunkosList;