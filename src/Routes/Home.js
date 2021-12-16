import React from 'react';
// import Box from '@mui/material/Box';
import {  makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '@mui/material/Container';
import CountryButton from '../Components/CountryButton';

// import {Regions} from '../Services/Regions';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        padding: '20px',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: 60,
        fontWeight: 'bold',
        margin: 0,
    },
    tagline: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontFamily: 'Yusei Magic,sans-serif',
    },
    

}))
export default function SimpleContainer() {

    const classes = useStyles();
//     const [countryMenu, setCountry] = useState(null);
//   const openCountry = Boolean(countryMenu);
//   const handleClickCountry = (event) => {
//       console.log('on clik = ',event.currentTarget);
//     setCountry(event.currentTarget);
//   };
//   const handleCloseCountry = (event) => {
//       const country = event.currentTarget.innerText;
//       if(country){
//           setSelectedCountry(country)
//         setSearchCountry(country);
//       }
//     console.log('on cllos = ',event.currentTarget.innerText);

//     setCountry(null);
//   };

  return (
    <div style={{ padding: '30px 0px' }}>

    <Container className={classes.container}>
        <p className={classes.title}>Weather is beyond anyone's control</p>
        <h1 className={classes.tagline}>But Weather app lets you plan your days ahead with more confidence..</h1>
    </Container>
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
      <CountryButton/>
    </div>
  );
}