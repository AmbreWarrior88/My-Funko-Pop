import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import TextField from "@material-ui/core/TextField";
import "../Header/style.css";

const useStyles = makeStyles((theme) => ({
    bottomNavigationRoot: {
        width: 500,
        backgroundColor: "transparent",
    },
    textFieldRoot: {
        "& > *": {
            /* margin: theme.spacing(1), */
            margin: "50px auto auto auto",
            width: "400px",
            backgroundColor: "rgba(0,0,0,0.5)",
        },
    },
    cssOutlinedInput: {
        color: "#fc00fd",
    },
    notchedOutline: {
        borderWidth: "2px",
        borderColor: "#fc00fd !important",
        color: "#fc00fd",
    },
    label: {
        color: "#fc00fd !important",
    },
}));

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState("category");

    return (
        <div className="header">
            <div className="gradient">
                <div className="title">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h1>Funko Pop Collection</h1>
                    </Link>

                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.bottomNavigationRoot}
                        style={{ justifyContent: "flex-end" }}
                    >
                        <BottomNavigationAction
                            label="Category"
                            value="category"
                            icon={<FolderIcon />}
                        />
                        <BottomNavigationAction
                            label="Collection"
                            value="collection"
                            icon={<FavoriteIcon />}
                        />
                    </BottomNavigation>
                </div>
                <form
                    className={classes.textFieldRoot}
                    noValidate
                    autoComplete="off"
                    style={{ display: "flex", justifyContent: "start" }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                notchedOutline: classes.notchedOutline,
                                focused: classes.cssFocused,
                            },
                            inputMode: "numeric",
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.label,
                                /* focused: classes.focusedLabel,
                              error: classes.erroredLabel, */
                            },
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default Header;
