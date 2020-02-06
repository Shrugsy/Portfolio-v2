import React, {useState, useEffect} from "react";
import { Dialog } from "@material-ui/core";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    card: {
      background: "#282828",
      color: "rgb(175, 175, 175)"
    },
    media: {
        maxHeight: '70vh',
      objectFit: "contain",
      color: "rgb(175, 175, 175)"
    },
    leftImgOverlay: {
        position: 'absolute',
        color: 'black',
        top: '0',
        height: '100%',
        width: '50%',
        '&:hover svg': {
            opacity: 1,
            transform: 'scale(2) translateY(-25%)',
            transformOrigin: 'left center'
        }
    },
    rightImgOverlay: {
        position: 'absolute',
        color: 'black',
        top: '0',
        right: '0',
        height: '100%',
        width: '50%',
        '&:hover svg': {
            opacity: 1,
            left: '95%',
            transform: 'scale(2) translateY(-25%)',
            transformOrigin: 'right center'
        }
    },
    leftIconOverlay: {
        color: '#454FB4',
        position: 'relative',
        top: '50%',
        left: '2%',
        transform: 'translateY(-50%)',
        transition: 'all 0.3s ease-in-out',
        opacity: 0.5,

    },
    rightIconOverlay: {
        color: '#454FB4',
        position: 'relative',
        top: '50%',
        left: '92%',
        transform: 'translateY(-50%)',
        transition: 'all 0.3s ease-in-out',
        opacity: 0.5
    }
  });


const ProjectPopup = ({
  handleClose,
  open,
  title,
  description,
  images,
  tech,
  liveButton,
  sourceButton
}) => {
    let maxCtr = images.length;
    const classes = useStyles();

    const [ctr, setCtr] = useState(0)
    const [image, setImage] = useState(images[ctr])

    useEffect(() => {
        setImage(images[ctr])
    }, [ctr])

    const handleClickLeftSide = () => {
        if (ctr > 0) {
            setCtr(ctr - 1);
        } else {
            setCtr(images.length - 1)
        }
    }

    const handleClickRightSide = () => {
        if (ctr < maxCtr - 1) {
            setCtr(ctr + 1);
        } else {
            setCtr(0)
        }
    }

  return (
    <Dialog open={open} onClose={handleClose}
    maxWidth='md'
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <div className={classes.leftImgOverlay} onClick={handleClickLeftSide}><ArrowBackIosIcon className={classes.leftIconOverlay} /></div>
          <div className={classes.rightImgOverlay} onClick={handleClickRightSide}><ArrowForwardIosIcon className={classes.rightIconOverlay} /></div>
                  </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
            <Typography variant="body2" component="p">
              Technologies used: {tech.join(", ")}
            </Typography>
          </CardContent>

        <CardActions>
          {liveButton}
          {sourceButton}
        </CardActions>
      </Card>
    </Dialog>
  );
};
export default ProjectPopup;
