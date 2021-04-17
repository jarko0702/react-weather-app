import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Weather } from "./components/Weather";

import "./App.css";

function App() {
  return (
    <Grid container spacing={2} className="App">
      <Grid item xs={12}>
        <Typography variant="h3" component="h3">
          Weather App
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Weather />
      </Grid>
    </Grid>
  );
}

export default App;
