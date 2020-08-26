import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
/* import universes from "../../data/universes.json"; */
import '../Universes/style.css';
import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: '100%',
        margin: '20px',
        border: '1px solid #fc00fd'
    },
    media: {
        height: 140,
    },
});

const Universes = () => {
    const classes = useStyles();

    const [universesList, setUniversesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/universes");
            console.log(response.data);
            setUniversesList(response.data);
        }
        fetchData();
    }, []);

    return (
        <div
            className='cards'
        >
            {universesList.map((e) => (
                <Card
                    className={classes.root}
                >
                    <Link
                        to={`/universe/${e._id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`/img/${e.img}`}
                                title="Wallpaper"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    style={{ color: "#fc00fd" }}
                                >
                                    {e.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            ))}
        </div>
    );
};

export default Universes;
