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
  listItemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    color: "white",
  },
}));

export default function Daily() {
  const classes = useStyles();
  const params = useParams();
  const [weatherData, , isLoading, doesErrorOccured] =
    useContext(WeatherContext);
  const { timezone, daily } = weatherData;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Daily Weather -{" "}
        <span className={classes.cityTitle}>
          {params.city.charAt(0).toUpperCase() +
            params.city.slice(1).toLowerCase()}
        </span>
      </h1>

      <Container className={classes.weatherContainer}>
        {isLoading ? (
          <Loader />
        ) : doesErrorOccured || !daily ? (
          <NetworkError />
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <List sx={{ width: "100%" }} aria-label="weather details">
              <Divider />
              {daily?.map((data, index) => {
                const dateObj = new Date(data.dt * 1000);
                const date = dateObj.toLocaleDateString("en-US", {
                  timeZone: timezone,
                  month: "short",
                  day: "numeric",
                  weekday: "short",
                });

                return (
                  <div>
                    <div className={classes.listItemsContainer}>
                      <h2 style={{ color: "black", width: "150px" }}>{date}</h2>
                      <div>
                        <h1 style={{ width: "150px", marginBottom: 0 }}>
                          {`${(Math.round(data.temp.max * 10) / 10).toFixed(
                            1
                          )}°C/${(Math.round(data.temp.min * 10) / 10).toFixed(
                            1
                          )}°C `}
                        </h1>
                        <p style={{ fontSize: 15, margin: 0 }}>{"Max/Min"}</p>
                      </div>
                      <h2>{data.weather[0].main}</h2>
                      <div>
                        <h2 style={{ width: "250px", marginBottom: 0 }}>
                          {data.wind_speed + " meter/sec"}
                        </h2>
                        <p style={{ fontSize: 15, margin: 0 }}>
                          {"Wind Speed"}
                        </p>
                      </div>
                    </div>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </Box>
        )}
      </Container>
    </div>
  );
}
