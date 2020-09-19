import React from 'react';
import {
useHistory
} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor: '#fc00fd',
        marginBottom: '20px',
        '&:hover': {
            filter: 'grayscale(20%)',
    }
}
}));

const ButtonBack = (props) =>{
    const classes = useStyles();
    const history= useHistory()
    return(
    <Button className={classes.button} variant="contained" color="secondary" startIcon={<ArrowBackIcon/>} onClick={()=> history.push(props.history)}>
        Back
      </Button>
)
}

export default ButtonBack;
