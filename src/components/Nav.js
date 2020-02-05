import React from "react";
import Sidebar from "./Sidebar";
import NavAppBar from "./NavAppBar";
import { Hidden } from "@material-ui/core";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Hidden smDown implementation="css">
        <Sidebar
          variant="permanent"
          open
          handleDrawerToggle={handleDrawerToggle}
        />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Sidebar
          variant="temporary"
          open={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Hidden>
      <Hidden mdUp implementation="css">
        <NavAppBar handleMenuClick={handleDrawerToggle} />
      </Hidden>
    </div>
  );
}
