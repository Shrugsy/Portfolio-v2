import React from "react";
import { string, node } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:hover ": {
      background: "#353535",
    },
  },
}));

SidebarItem.propTypes = {
  title: string.isRequired,
  icon: node.isRequired,
};

function SidebarItem({ title, icon }) {
  const classes = useStyles();
  return (
    <ListItem
      className={classes.listItem}
      button
      component="a"
      href={`#${title}`}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}
export default SidebarItem;
