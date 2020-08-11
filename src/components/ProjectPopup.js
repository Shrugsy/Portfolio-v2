import React, { useState, useEffect } from "react";
import { func, string, bool, array } from "prop-types";

import { Dialog, Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import ProjectContent from "./ProjectContent";
import ProjectActions from "./ProjectActions";

const useStyles = makeStyles({
  card: {
    background: "#282828",
    color: "rgb(175, 175, 175)",
  },
  media: {
    maxHeight: "70vh",
    objectFit: "contain",
    color: "rgb(175, 175, 175)",
  },
  leftImgOverlay: {
    position: "absolute",
    color: "black",
    top: "0",
    height: "100%",
    width: "50%",
    "&:hover svg": {
      opacity: 1,
      transform: "scale(2) translateY(-25%)",
      transformOrigin: "left center",
    },
  },
  rightImgOverlay: {
    position: "absolute",
    color: "black",
    top: "0",
    right: "0",
    height: "100%",
    width: "50%",
    "&:hover svg": {
      opacity: 1,
      left: "95%",
      transform: "scale(2) translateY(-25%)",
      transformOrigin: "right center",
    },
  },
  leftIconOverlay: {
    color: "#454FB4",
    position: "relative",
    top: "50%",
    left: "2%",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease-in-out",
    opacity: 0.5,
  },
  rightIconOverlay: {
    color: "#454FB4",
    position: "relative",
    top: "50%",
    left: "92%",
    transform: "translateY(-50%)",
    transition: "all 0.3s ease-in-out",
    opacity: 0.5,
  },
});

ProjectPopup.propTypes = {
  handleClose: func.isRequired,
  open: bool.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  images: array.isRequired,
  tech: array.isRequired,
  linkLive: string,
  linkSource: string,
};

function ProjectPopup({
  handleClose,
  open,
  title,
  description,
  images,
  tech,
  linkLive,
  linkSource,
}) {
  let maxCtr = images.length;
  const classes = useStyles();

  const [ctr, setCtr] = useState(0);
  const [image, setImage] = useState(images[ctr]);

  useEffect(() => {
    setImage(images[ctr]);
  }, [ctr, images]);

  const handleClickLeftSide = () => {
    if (ctr > 0) {
      setCtr(ctr - 1);
    } else {
      setCtr(images.length - 1);
    }
  };

  const handleClickRightSide = () => {
    if (ctr < maxCtr - 1) {
      setCtr(ctr + 1);
    } else {
      setCtr(0);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={image}
            title={title}
          />
          <div className={classes.leftImgOverlay} onClick={handleClickLeftSide}>
            <ArrowBackIosIcon className={classes.leftIconOverlay} />
          </div>
          <div
            className={classes.rightImgOverlay}
            onClick={handleClickRightSide}
          >
            <ArrowForwardIosIcon className={classes.rightIconOverlay} />
          </div>
        </CardActionArea>
        <ProjectContent title={title} description={description} tech={tech} />
        <ProjectActions linkLive={linkLive} linkSource={linkSource} />
      </Card>
    </Dialog>
  );
}
export default ProjectPopup;
