import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

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
  errorText: {
    color: theme.palette.primary.main,
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 0,
    [theme.breakpoints.up('sm')]: {
        fontSize: 60,
          }
  },
  errorNumber: {
    color: theme.palette.primary.main,
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        ERROR - <span className={classes.errorNumber}>404</span>
      </h1>
      <Container className={classes.weatherContainer}>
        <h1 className={classes.errorText}>Page Not Found</h1>;
      </Container>
    </div>
  );
}
