import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Regions} from '../Services/Regions';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Main() {

const [selection,setSelection] = useState({country:'',city:''});
const [searchCountry,setSearchCountry] = useState("");
const [searchCity,setSearchCity] = useState("");

const handleSearchCountry = (event)=>{
    let country = event.target.value;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    setSearchCountry(country);  
    if(country in Regions){
      setSelection({...selection,country})
  }}
 
const handleSearchCity = (event)=>{
    let city = event.target.value;
    city = city.charAt(0).toUpperCase() + city.slice(1);
    setSearchCity(city); 
        if(city in Regions[selection.country]){
          setSelection({...selection,city})
      }}


    const [countryMenu, setCountry] = useState(null);
  const openCountry = Boolean(countryMenu);
  const handleClickCountry = (event) => {
      console.log('on clik = ',event.currentTarget);
    setCountry(event.currentTarget);
  };
  const handleCloseCountry = (event) => {
      const country = event.currentTarget.innerText;
      if(country){
          setSelection({...selection,country})
        setSearchCountry(country);
      }
    console.log('on cllos = ',event.currentTarget.innerText);

    setCountry(null);
  };

  const [cityMenu, setCity] = React.useState(null);
  const openCity = Boolean(cityMenu);
  const handleClickCity = (event) => {
    setCity(event.currentTarget);
  };
  const handleCloseCity = (event) => {
    const city = event.currentTarget.innerText;
    if(city){
        setSelection({...selection,city});
        setSearchCity(city);
    }
    setCity(null);
  };

return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            The Weather App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Country…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchCountry}
              onChange={handleSearchCountry}
            />
          </Search>
          <div>
      <Button
      variant="contained"
      size="large"
        id="country-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openCountry ? 'true' : undefined}
        onClick={handleClickCountry}
      >
        Country
      </Button>
      <Menu
        id="country-menu"
        anchorEl={countryMenu}
        open={openCountry}
        onClose={handleCloseCountry}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{Object.keys(Regions).map((country)=>(
        <MenuItem onClick={handleCloseCountry}>{country}</MenuItem>
      ))}
      </Menu>
    </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="City…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchCity}
              onChange={handleSearchCity}
            disabled={!Boolean(selection.country)}
            />
          </Search>
          <div>
      <Button 
      variant="contained"
      size="large"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openCity ? 'true' : undefined}
        onClick={handleClickCity}
      >
        City
      </Button>
      <Menu
        id="city-menu"
        anchorEl={cityMenu}
        open={openCity}
        onClose={handleCloseCity}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{Object.keys(Regions[selection.country]||{}).map((city)=>(
          <MenuItem onClick={handleCloseCity}>{city}</MenuItem>

      ))}
        
      </Menu>
    </div>
        </Toolbar>
      </AppBar>
      {/* <div>
          {selection.country}{selection.city}
      </div> */}
    </Box>
  );
}
