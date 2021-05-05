import React from "react";
import { Grid } from "@material-ui/core";
import { Weather } from "./components/Weather";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={6} className="center">
        <Weather />
      </Grid>
    </Grid>
  );
}

export default App;
