import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import WeatherResult from "./WeatherResult";
import "./weather.css";

const generateApiUrl = (city: string) => {
  const base = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "be2cff5307ba6828d977adee50b3866a";

  const URL = `${base}${city}&appid=${apiKey}&units=metric`;
  return URL;
};

export interface weatherInterface {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export function Weather() {
  const [input, setInput] = useState<string>("");
  const [weatherState, setWeatherState] = useState<weatherInterface>();

  const requestWeather = (city: string) => {
    const url = generateApiUrl(city);

    fetch(url)
      .then((response) => response.json())
      .then((result) => setWeatherState(result));

    setInput("");
  };

  return (
    <div className="body">
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12}>
          <TextField
            variant="standard"
            placeholder="Search..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              requestWeather(input);
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <WeatherResult
        name={weatherState?.name}
        temperature={weatherState?.main.temp}
        description={weatherState?.weather[0].description}
        iconId={weatherState?.weather[0].icon}
      />
    </div>
  );
}
