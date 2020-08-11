import React from "react";
import { string } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  href: {
    height: "56px",
    marginTop: "-56px",
    [theme.breakpoints.up("sm")]: {
      height: "64px",
      marginTop: "-64px",
    },
    [theme.breakpoints.up("md")]: {
      height: "0px",
      marginTop: "0px",
    },
  },
  bannerStyle: {
    background: (props) => props.color,
    width: "100%",
  },
  headingStyle: {
    width: "90%",
    color: "#1F1F1F",
    textTransform: "uppercase",
    fontSize: "3rem",
    margin: "0 0 0 48px",
    padding: "24px 0 24px 0",
    fontWeight: "300",
  },
}));

Banner.propTypes = {
  title: string.isRequired,
  color: string.isRequired,
};

// also take whether app bar is visible?
export default function Banner({ title, color }) {
  const classes = useStyles({color});

  return (
    <React.Fragment>
      <div id={title} className={classes.href}></div>
      <div className={classes.bannerStyle}>
        <h2 className={classes.headingStyle}>{title}</h2>
      </div>
    </React.Fragment>
  );
}
