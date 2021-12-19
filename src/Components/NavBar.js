import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SelectedContext } from "../Services/contexts";
import { Regions } from "../Services/Regions";

export default function NavBar({ setSearchCountry, setSearchCity }) {
  const [selected, setSelected] = useContext(SelectedContext);
  useEffect(() => {
    if (!selected.city) {
      const url = window.location.pathname;
      const endIndex = url.slice(8).indexOf("/");
      let city = endIndex === -1 ? url.slice(8) : url.slice(8, endIndex + 8);
      city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
      const countries = Object.keys(Regions);
      countries.forEach((country) => {
        if (city in Regions[country]) {
          setSelected({ country, city });
        }
      });
    }
  }, []); //eslint-disable-line
  // it is done so that when some1 refreshes it has selectedCity and selectedCountry states is restored

  let location = useLocation().pathname;
  if (location.search("/hourly") !== -1) {
    location = "/hourly/";
  } else if (location.search("/daily") !== -1) {
    location = "/daily/";
  } else {
    location = "/";
  }
  /*it is done so that navbar catches urls ending with '/' also, so that navbar tabs work properly.. 
    though the content of each tab is rendered through <Outlet/> and reactrouter 
    by matching borwser address with each routes' path*/

  return (
    <Box sx={{ bgcolor: "background.paper", flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Tabs
          value={location}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="weather-tabs"
        >
          <Tab
            component={Link}
            value="/"
            to={`/cities/${selected.city}/`}
            label="Today"
            disabled={!selected.city}
          />
          <Tab
            component={Link}
            value="/hourly/"
            to={`/cities/${selected.city}/hourly/`}
            label="Hourly"
            disabled={!selected.city}
          />
          <Tab
            component={Link}
            value="/daily/"
            to={`/cities/${selected.city}/daily/`}
            label="Daily"
            disabled={!selected.city}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}
