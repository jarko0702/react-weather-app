import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./weather.css";

function WeatherResult(props: any) {
  const { name, temperature, description, iconId } = props;
  if (name !== undefined) {
    return (
      <Card>
        <CardContent>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="subtitle1">{description}</Typography>
              <Typography variant="body1">{`${temperature} °C`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                className="image"
                src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
                alt="Icon of weather"
              ></img>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  } else {
    return <></>;
  }
}

export default WeatherResult;
