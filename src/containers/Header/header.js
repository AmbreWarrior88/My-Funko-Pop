import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import TextField from '@material-ui/core/TextField';
import '../Header/style.css'

const useStyles = makeStyles((theme) => ({
    bottomNavigationRoot: {
        width: 500,
        backgroundColor: 'transparent',
    },
    textFieldRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const Header = () => {

    const classes = useStyles();
    const [value, setValue] = useState('category');

    const inputProps = {
        classes: {
            input: {
                borderColor: 'green',
            }
        }
    };

    return (
        <div className='header'>
            <div className='title'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>Funko Pop Collection</h1>
                </Link>

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.bottomNavigationRoot}
                    style={{ justifyContent: 'flex-end' }}
                >
                    <BottomNavigationAction label="Category" value="category" icon={<FolderIcon />} />
                    <BottomNavigationAction label="Collection" value="collection" icon={<FavoriteIcon />} />
                </BottomNavigation>
            </div>
            <form className={classes.textFieldRoot} noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'start' }}>
                <TextField id="outlined-basic" label="Search" variant="outlined" inputProps={inputProps} />
            </form>
        </div>
    )
}

export default Header;