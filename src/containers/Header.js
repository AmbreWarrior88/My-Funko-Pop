import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
            <h1>Funko Pop Collection</h1>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
                style={{ justifyContent: 'flex-end' }}
            >
                <BottomNavigationAction label="Category" icon={<FolderIcon />} />
                <BottomNavigationAction label="Collection" icon={<FavoriteIcon />} />
            </BottomNavigation>

        </div>
    )
}

export default Header;