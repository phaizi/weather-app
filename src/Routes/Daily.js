import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {  makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { WeatherContext } from '../Services/contexts';
import Loader from '../Components/Loader';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';



const useStyles = makeStyles((theme) => ({
    container: {
        padding: '20px', 
        alignContent:'center',
        textAlign:'center',
    },
    weatherContainer:{
        margin: '0px auto',
        backgroundColor: theme.palette.secondary.light,
        padding:'20px 30px',
        boxShadow: '5px 5px 25px 2px #888888',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 0,
    },
    cityTitle:{
        color: theme.palette.primary.main,
    },
}))

export default function Daily(){

    const classes = useStyles();
    const params = useParams();
    const [ , isLoading] = useContext(WeatherContext); 
    // const {timezone, dailyData} = weatherData;

    return (
        <div className={classes.container}>
        <h1 className={classes.title}>Daily Weather - <span className={classes.cityTitle}>{params.city.charAt(0).toUpperCase() + params.city.slice(1).toLowerCase()}</span></h1>

 <Container className={classes.weatherContainer}>
            {isLoading?<Loader/>:
    <Box sx={{display:'flex',flexWrap:'wrap',gap: '10px'}}>
     </Box>
    }
</Container>
</div>
    )
}