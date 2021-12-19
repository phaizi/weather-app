import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  loadingText: {
    color: theme.palette.primary.main,
  },
}));

export default function Loader() {
  const classes = useStyles();
  return (
    <h1 className={classes.loadingText}>Loading Weather, please wait...</h1>
  );
}
