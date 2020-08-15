import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    bottomNavigationRoot: {
        width: 500,
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
    const [value, setValue] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                <h1>Funko Pop Collection</h1>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.bottomNavigationRoot}
                    style={{ justifyContent: 'flex-end' }}
                >
                    <BottomNavigationAction label="Category" icon={<FolderIcon />} />
                    <BottomNavigationAction label="Collection" icon={<FavoriteIcon />} />
                </BottomNavigation>
            </div>
            <form className={classes.textFieldRoot} noValidate autoComplete="off" style={{ display: 'flex', justifyContent: 'center' }}>
                <TextField id="outlined-basic" label="Search" variant="outlined" />
            </form>
        </div>
    )
}

export default Header;