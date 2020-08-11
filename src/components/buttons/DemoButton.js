import React from "react";
import { string } from "prop-types";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CancelIcon from "@material-ui/icons/Cancel";

DemoButton.propTypes = {
  linkLive: string,
};

export default function DemoButton({ linkLive }) {
  return linkLive ? (
    <Button
      href={linkLive}
      variant="contained"
      size="small"
      color="primary"
      startIcon={<ArrowForwardIosIcon />}
    >
      Live Demo
    </Button>
  ) : (
    <span style={{ backgroundColor: "white" }}>
      <Button
        style={{ color: "#404040" }}
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
