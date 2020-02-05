import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( theme => ({
  contactLine: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    "& a": {
      marginLeft: "10px"
    }
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "60px",
    width: "60px",
    background: "#282828",
    borderRadius: "50%",
    marginRight: "10px",
    transform: "translateY(-25%)",
    "& svg": {
      margin: "auto"
    }
  },
  links: {
    color: "inherit",
    textDecoration: 'none',
    height: '35px',
    padding: '3px 3px 0 -3px',
    transition: '0.25s all',
    fontSize: 'inherit',
    '&:hover ': {
        borderBottom: '3px solid currentColor',
        padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '1rem'
    },
  }
}));

const ContactItem = ({icon, title, href, content}) => {
  const classes = useStyles();
  return (
    <p className={classes.contactLine}>
      <span className={classes.circle}>
        {icon}
      </span>
      {title}:
      <a className={classes.links} href={href}>
        {content}
      </a>
    </p>
  );
};

export default ContactItem;
