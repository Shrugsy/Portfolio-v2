import React from "react";
import { Drawer, List, Divider } from "@material-ui/core";
// import InboxIcon from "@material-ui/icons/MoveToInbox";

import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import CodeIcon from "@material-ui/icons/Code";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import SidebarItem from "./SidebarItem";


const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    backgroundColor: "#282828",
    // color: 'white',
    color: "rgb(175, 175, 175)",
    width: drawerWidth
  },
  drawerHeader: {
    // backgroundColor: "#fafafa",
    fontStyle: "Roboto",
    fontWeight: "300",
    // marginLeft: '8px',
    margin: "0 20px 0 20px",
    backgroundColor: "#282828",
    // color: 'white',
    color: "rgb(175, 175, 175)",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const Sidebar = ({ open, handleDrawerToggle, variant }) => {
  const classes = useStyles();

  //   const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{ keepMounted: true }}
    >
      <div
        role="presentation"
        onClick={() => {
          if (variant === "temporary") {
            handleDrawerToggle();
          }
        }}
        onKeyDown={() => {
          if (variant === "temporary") {
            handleDrawerToggle();
          }
        }}
      >
        <div className={classes.drawerHeader}>
          <a className="noStyle column" href="#top">
            <h1 className="brand-logo">Colin Fraser</h1>
            <p>Full Stack Developer</p>
          </a>
        </div>
        <Divider />
        <List>
            <SidebarItem
              title={"About"}
              icon={<PersonIcon className="personIcon" fontSize={"large"} />}
            />

            <SidebarItem
              title={"Skills"}
              icon={<CodeIcon className="skillsIcon" fontSize={"large"} />}
            />
            <SidebarItem
              title={"Projects"}
              icon={
                <AccountTreeIcon className="projectsIcon" fontSize={"large"} />
              }
            />
            <SidebarItem
              title={"Experience"}
              icon={
                <WorkIcon className="experienceIcon" fontSize={"large"} />
              }
            />
            <SidebarItem
              title={"Education"}
              icon={<SchoolIcon className="educationIcon" fontSize={"large"} />}
            />
            <SidebarItem
              title={"Contact"}
              icon={<EmailIcon className="contactIcon" fontSize={"large"} />}
            />
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
