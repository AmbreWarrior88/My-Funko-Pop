import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: 'green',
    },
}));


const FunkoCard = () => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="/img/funko/harryPotter/harry.png"
                    title="Harry"
                />
                <div>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                #123
          </Avatar>
                        }
                        title="Harry"
                        subheader="SDCC 2017"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Date d'achat: 18/09/17
        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Prix d'achat: 35 €
        </Typography>
                    </CardContent>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Côte: 85 €
        </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default FunkoCard;