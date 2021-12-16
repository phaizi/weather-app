import React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import {Regions} from '../Services/Regions';


export default function CountryButton({setSelectedCountry,setSearchCountry}){

    // const [countryMenu, setCountry] = useState(null);
    // const openCountry = Boolean(countryMenu);
    // const handleClickCountry = (event) => {
    //     console.log('on clik = ',event.currentTarget);
    //   setCountry(event.currentTarget);
    // };
    // const handleCloseCountry = (event) => {
    //     const country = event.currentTarget.innerText;
    //     if(country){
    //         setSelectedCountry(country)
    //       setSearchCountry(country);
    //     }
    //   console.log('on cllos = ',event.currentTarget.innerText);
  
    //   setCountry(null);
    // };
  
    return(
<div>

        {/* <Button
        variant="contained"
        size="large"
        id="country-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={openCountry ? 'true' : undefined}
        onClick={handleClickCountry}
        endIcon={<KeyboardArrowDownIcon />}
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
      </Menu> */}
        </div>
        )
    }