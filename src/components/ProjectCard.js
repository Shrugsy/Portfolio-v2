import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    //   maxWidth: 345,
    minWidth: 300,
    background: "#282828",
    color: "rgb(175, 175, 175)",
    boxShadow: '2px 2px 8px black'
  },
  media: {
    height: 200,
    objectFit: "cover",
    color: "rgb(175, 175, 175)"
  }
});

const ProjectCard = ({
  title,
  description,
  images,
  tech,
  liveButton,
  sourceButton,
  handleClickOpen
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          component="img"
          className={classes.media}
          image={images[0]}
          title={title}
        />
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
      </CardActionArea>
      <CardActions>
        {liveButton}
        {sourceButton}
      </CardActions>
    </Card>
  );
};
export default ProjectCard;
