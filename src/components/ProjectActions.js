import React from "react";
import { string } from "prop-types";
import { CardActions } from "@material-ui/core";
import DemoButton from "./buttons/DemoButton";
import SourceButton from "./buttons/SourceButton";

ProjectActions.propTypes = {
  linkLive: string,
  linkSource: string,
};

export default function ProjectActions({ linkLive, linkSource }) {
  return (
    <CardActions>
      <DemoButton linkLive={linkLive} />
      <SourceButton linkSource={linkSource} />
    </CardActions>
  );
}
