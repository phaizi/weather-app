import React, {useContext, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SelectedCityContext } from '../Services/contexts';
import {Regions} from '../Services/Regions';


export default function NavBar({setSelectedCountry, setSearchCountry, setSearchCity}) {

    const [selectedCity,setSelectedCity] = useContext(SelectedCityContext);
    useEffect(()=>{
        if(!selectedCity){

            const url = window.location.pathname;
            const endIndex =url.slice(1).indexOf('/');
        let city = url.slice(1,endIndex+1);
        city = city.charAt(0).toUpperCase() + city.slice(1);
        const countries = Object.keys(Regions);
        countries.forEach((country) => {
            if(city in Regions[country]){
                setSelectedCountry(country);
                setSearchCountry(country);
                console.log('selectedCountry = ',country);
            }
        })
        setSelectedCity(city);
        setSearchCity(city);
        console.log('url city is = ', city);
      } 
    },[]) //eslint-disable-line 
    // it is done so that when some1 refreshes it has selectedCity and selectedCountry states is restored

    let location = useLocation().pathname;
    console.log('1st location = ',location);
    if( location.search('/hourly')!==-1){
        location = '/hourly/'; 
        console.log('location = ',location);
    } else if( location.search('/daily')!==-1){
        location = '/daily/';
        console.log('location = ',location);
    } else {
        location = '/';
        console.log('location = ',location);
    }
    // it is done to catch urls ending with '/' also

  return (
    <Box sx={{ bgcolor: 'background.paper', flexGrow:1 }}>
      <AppBar color="secondary" position="static">
        <Tabs
          value={location}
        //   onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab component={Link} value='/' to={`/${selectedCity}/`} label="Today" 
        disabled={!selectedCity}
          />
          <Tab component={Link} value='/hourly/' to= {`/${selectedCity}/hourly`} label="Hourly" 
          disabled={!selectedCity}
          />
          <Tab component={Link} value='/daily/' to={`/${selectedCity}/daily`} label="Daily" 
          disabled={!selectedCity}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}
