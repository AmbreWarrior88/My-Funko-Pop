import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import universe from '../data/universe.json';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Category = () => {
    const classes = useStyles();
    return (
        <>
            {universe.map(e => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={e.img}
                            title="Wallpaper"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {e.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Voir la collection
                        </Button>
                    </CardActions>
                </Card>
            ))
            }
        </>
    )
}

export default Category;