import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";


const useStyles = makeStyles(theme => ({ 
  listItem: {
    '&:hover ': {
      background: '#353535'
    }
  }
}))

const SidebarItem = ({ title, icon }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem} button component="a" href={`#${title}`}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
    </ListItem>
  );
};
export default SidebarItem;
