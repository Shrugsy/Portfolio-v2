import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: '#282828',
    color: 'rgb(175, 175, 175)',
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const NavAppBar = ({ handleMenuClick }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Colin Fraser
          </Typography>
        </Toolbar>
      
      </AppBar>    
      <div className={classes.toolbar}></div>  
    </React.Fragment>
  );
};

export default NavAppBar;
