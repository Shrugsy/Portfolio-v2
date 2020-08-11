import React from "react";
import { string, array } from "prop-types";
import { CardContent, Typography } from "@material-ui/core";

ProjectContent.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  tech: array.isRequired,
};

function ProjectContent({ title, description, tech }) {
  return (
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
  );
}

export default ProjectContent;
