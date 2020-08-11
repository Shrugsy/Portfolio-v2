import React from "react";
import { string, array } from "prop-types";

// import CrossfadeImage from 'react-crossfade-image';

import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

Project.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  images: array.isRequired,
  tech: array.isRequired,
  linkLive: string,
  linkSource: string,
};

function Project({ title, description, images, tech, linkLive, linkSource }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <ProjectCard
        title={title}
        description={description}
        images={images}
        tech={tech}
        linkLive={linkLive}
        linkSource={linkSource}
        handleClickOpen={() => setOpen(true)}
      />
      <ProjectPopup
        open={open}
        handleClose={() => setOpen(false)}
        title={title}
        description={description}
        images={images}
        tech={tech}
        linkLive={linkLive}
        linkSource={linkSource}
      />
    </React.Fragment>
  );
}

export default Project;
