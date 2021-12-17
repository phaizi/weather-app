import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {  makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import SearchButton from '../Components/SearchButton';
import {Regions} from '../Services/Regions';
import { SelectedContext } from '../Services/contexts';

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
    instructions: {
        color: theme.palette.secondary.main,
      fontSize: 30,
      fontWeight: 'bold'
    },
    buttonContainer: {
      display: 'flex', 
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'center',
    }

}))
export default function SimpleContainer() {
  
    const classes = useStyles();
const [selected,setSelected] = useContext(SelectedContext);
    const navigate = useNavigate();

    const onChangeCountry = (e,value)=>{
      setSelected({...selected,country:value});
    }
    const onChangeCity = (e,value)=>{
      setSelected({...selected,city:value});
              navigate(`/${value}/`);
    }

  return (
    <div style={{ padding: '30px 0px' }}>
    <Container className={classes.container}>
        <h1 className={classes.title}>Weather is beyond anyone's control</h1>
        <h1 className={classes.tagline}>But Weather app lets you plan your days ahead with more confidence..</h1>
        <Divider variant="middle" />
        <p className={classes.instructions}>First select the country & then select the city to know the weather there</p>
        <div className={classes.buttonContainer}>
        <SearchButton optionList={Object.keys(Regions)}  label='Country...' onChange={onChangeCountry} />
          <SearchButton optionList={Object.keys(Regions[selected.country]||{})}  label='City...' disabled={!Boolean(selected.country)} onChange={onChangeCity}  />
        </div>
    </Container>
    </div>
  );
}