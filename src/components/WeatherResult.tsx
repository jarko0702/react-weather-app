import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./weather.css";

function WeatherResult(props: any) {
  if (props.name !== undefined) {
    return (
      <>
        <Grid className="result" container spacing={2} alignContent="center">
          <Grid item xs={6}>
            <Typography variant="h6" component="h6">
              {props.name}
            </Typography>
            <Typography variant="body1">{`${props.temperature} °C`}</Typography>
            <Typography variant="body1">{props.description}</Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              className="image"
              src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`}
            ></img>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return <></>;
  }
}

export default WeatherResult;
