import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import universes from "../data/universes.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Universes = () => {
  const classes = useStyles();
  const { name } = useParams();

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        flexDirection: "column",
        flexFlow: "wrap",
        justifyContent: "center",
      }}
    >
      {universes.map((e) => (
        <Card
          className={classes.root}
          style={{ width: "100%", margin: "20px" }}
        >
          <Link
            to={`/universe/${e.title.split(" ").join("-")}`}
            style={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={e.img}
                title="Wallpaper"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ color: "black" }}
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
