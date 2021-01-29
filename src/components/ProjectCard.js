import React from "react";
import { string, array, func } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";

import ProjectContent from "./ProjectContent";
import ProjectActions from "./ProjectActions";

const useStyles = makeStyles({
  card: {
    height: 450,
    minWidth: 300,
    background: "#282828",
    color: "rgb(175, 175, 175)",
    boxShadow: "2px 2px 8px black",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 200,
    objectFit: "cover",
    color: "rgb(175, 175, 175)",
  },
  cardActionArea: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});

ProjectCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  images: array.isRequired,
  tech: array.isRequired,
  linkLive: string,
  linkSource: string,
  handleClickOpen: func.isRequired,
};

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  linkLive,
  linkSource,
  handleClickOpen,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea} onClick={handleClickOpen}>
        <CardMedia
          component="img"
          className={classes.media}
          image={images[0]}
          title={title}
        />
        <ProjectContent title={title} description={description} tech={tech} />
      </CardActionArea>
      <ProjectActions linkLive={linkLive} linkSource={linkSource} />
    </Card>
  );
}
