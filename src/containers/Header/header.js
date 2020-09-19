import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import "../Header/style.css";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #fc00fd',
        backgroundColor: 'aliceblue',
        '&:hover': {
          backgroundColor: 'white',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    searchIcon: {
        color: '#fc00fd',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <header className="header">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h1>Funko POP Collection !</h1>
                    </Link>
                    <section className='nav-bar'>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                        <InputBase placeholder="Search…"
                       classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                         }}
                     inputProps={{ 'aria-label': 'search' }}/>
                   </div>
                <div className='link'>
            <Link to="/universes" >
            Univers
            </Link>
            <Link to="/collection">
            Collection
            </Link>
            <Link to="/favorite">
            Favoris
            </Link>
            </div>
                    </section>
                
        </header>
    );
};

export default Header;
