import React from "react";
// import CrossfadeImage from 'react-crossfade-image';
import { Button } from "@material-ui/core";


import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CancelIcon from "@material-ui/icons/Cancel";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";



const Project = ({
  title,
  description,
  images,
  tech,
  linkLive,
  linkSource
}) => {

  const [open, setOpen] = React.useState(false);

  let liveButton;
  if (linkLive) {
    liveButton = (
      <Button
        href={linkLive}
        variant="contained"
        size="small"
        color="primary"
        startIcon={<ArrowForwardIosIcon />}
      >
        Live Demo
      </Button>
    );
  } else {
    liveButton = (
      <span style={{ backgroundColor: "white" }}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled
          startIcon={<CancelIcon />}
        >
          Demo not available
        </Button>
      </span>
    );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ProjectPopup
        open={open}
        handleClose={handleClose}
        title={title}
        description={description}
        images={images}
        tech={tech}
        liveButton={liveButton}
        linkSource={linkSource}
      />
      <ProjectCard
        title={title}
        description={description}
        images={images}
        tech={tech}
        liveButton={liveButton}
        linkSource={linkSource}
        handleClickOpen={handleClickOpen}
      />
    </React.Fragment>
  );
};

export default Project;
