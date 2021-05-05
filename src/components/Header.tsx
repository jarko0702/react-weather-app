import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
