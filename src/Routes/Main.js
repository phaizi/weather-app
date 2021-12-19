import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchButton from "../Components/SearchButton";
import { Regions } from "../Services/Regions";
import NavBar from "../Components/NavBar";
import { SelectedContext } from "../Services/contexts";

export default function Main() {
  const [selected, setSelected] = useContext(SelectedContext);
  const navigate = useNavigate();

  const onChangeCountry = (e, value) => {
    setSelected({ ...selected, country: value });
  };
  const onChangeCity = (e, value) => {
    if (value) {
      //done so that if search city is cleared it wont change the url to null
      setSelected({ ...selected, city: value });
      navigate(`/cities/${value}/`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            The Weather App
          </Typography>
          <SearchButton
            optionList={Object.keys(Regions)}
            label="Country..."
            onChange={onChangeCountry}
          />
          <SearchButton
            optionList={Object.keys(Regions[selected.country] || {})}
            label="City..."
            disabled={!Boolean(selected.country)}
            onChange={onChangeCity}
          />
        </Toolbar>
      </AppBar>

      <NavBar></NavBar>
      <Outlet />
    </Box>
  );
}
