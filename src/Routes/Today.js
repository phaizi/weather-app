import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { WeatherContext } from "../Services/contexts";
import Loader from "../Components/Loader";
import NetworkError from "../Components/NetworkError";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
    alignContent: "center",
    textAlign: "center",
  },
  weatherContainer: {
    margin: "0px auto",
    backgroundColor: theme.palette.secondary.light,
    padding: "20px 30px",
    boxShadow: "5px 5px 25px 2px #888888",
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 0,
  },
  cityTitle: {
    color: theme.palette.primary.main,
  },
  time: {
    fontSize: 30,
  },
  temp: {
    color: "white",
    fontSize: 150,
    fontWeight: "bold",
    margin: 0,
  },
  feelslike: {
    color: "white",
    fontSize: 60,
    margin: 0,
  },
  feelslikespan: {
    color: theme.palette.primary.main,
    fontSize: 30,
    margin: "20",
  },
}));

const selectedKeys = ["pressure", "humidity", "wind_speed", "wind_deg"];

const weatherDetails = ["Pressure", "Humidity", "Wind Speed", "Wind direction"];

const units = ["hPa", "%", "meter/sec", "degrees"];

export default function Today() {
  let weatherValues;
  const classes = useStyles();
  const params = useParams();
  const [weatherData, , isLoading, doesErrorOccured] =
    useContext(WeatherContext);
  const { timezone, current } = weatherData;
  let dateObj, date;
  if (current) {
    dateObj = new Date(current.dt * 1000);
    date = dateObj.toLocaleTimeString("en-US", {
      timeZone: timezone,
      month: "long",
      day: "numeric",
      year: "numeric",
      time: "numeric",
    });
    weatherValues = selectedKeys.map(
      (item, index) => current[item] + " " + units[index]
    );
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Today's Weather -{" "}
        <span className={classes.cityTitle}>
          {params.city.charAt(0).toUpperCase() +
            params.city.slice(1).toLowerCase()}
        </span>
      </h1>

      <Container className={classes.weatherContainer}>
        {isLoading ? (
          <Loader />
        ) : (doesErrorOccured || !current) ? (
          <NetworkError />
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <div>
              <p className={classes.time}>As on {date}</p>
              <h1 className={classes.temp}>
                {(Math.round(current?.temp * 10) / 10).toFixed(1)}°C
              </h1>
              <h3 className={classes.feelslike}>
                <span className={classes.feelslikespan}>feels like </span>
                {(Math.round(current?.feels_like * 10) / 10).toFixed(1)}°C{" "}
              </h3>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <List sx={{ width: "50%" }} aria-label="weather details">
              <Divider />
              {selectedKeys.map((item, index) => (
                <div>
                  <ListItem
                    sx={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "medium",
                      height: 100,
                    }}
                    secondaryAction={
                      <h1>{weatherValues && weatherValues[index]}</h1>
                    }
                  >
                    <h1 style={{ color: "black" }}>{weatherDetails[index]}</h1>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Box>
        )}
      </Container>
    </div>
  );
}
