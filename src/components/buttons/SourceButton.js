import React from "react";
import { string } from "prop-types";
import CancelIcon from "@material-ui/icons/Cancel";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";

SourceButton.propTypes = {
  linkSource: string,
};

export default function SourceButton({ linkSource }) {
  return linkSource ? (
    <Button
      href={linkSource}
      variant="contained"
      size="small"
      startIcon={<GitHubIcon />}
    >
      View Source
    </Button>
  ) : (
    <span style={{ backgroundColor: "white" }}>
      <Button
        style={{ color: "#404040" }}
        variant="contained"
        size="small"
        color="secondary"
        disabled
        startIcon={<CancelIcon />}
      >
        Source code not available
      </Button>
    </span>
  );
}
