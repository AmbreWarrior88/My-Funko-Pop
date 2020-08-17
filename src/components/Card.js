import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import data from '../data/data.json';
import Typography from '@material-ui/core/Typography';

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


const FunkoCard = () => {

    const classes = useStyles();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                data.map(e => (
                    <List className={classes.root}>
                        <ListItem>
                            <img src={e.img} alt={e.universe} style={{ height: '150px' }} />
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
                        <Divider variant="inset" component="li" />
                    </List>
                ))
            }
        </div>
    )
}

export default FunkoCard;