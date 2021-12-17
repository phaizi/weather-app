import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {  makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { WeatherContext } from '../Services/contexts';
import Loader from '../Components/Loader';
// import Divider from '@mui/material/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        padding: '20px',
    },
    weatherContainer:{
        backgroundColor: theme.palette.secondary.light,
        height:500,
        margin:'20px 0px',
        padding:'2px 30px',
        boxShadow: '5px 5px 25px 2px #888888',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: 60,
        fontWeight: 'bold',
        margin: 0,
    },
    cityTitle:{
        color: theme.palette.primary.main,
    },
    time:{
        fontSize:30
    },
    temp:{
        color:'white',
        fontSize:150,
        fontWeight:'bold',
        margin:0,
    },
    feelslike:{
        color:'white',
        fontSize:60,
        margin:0
    },
    feelslikespan:{
        color: theme.palette.primary.main,
        fontSize:30,
        margin:0
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

export default function Today(){
    const classes = useStyles();
    const params = useParams();
    const [weatherData, setWeatheData, isLoading] = useContext(WeatherContext); 
    const {timezone, current} = weatherData;
    let dateObj,date
    if(current){

        dateObj = new Date(current.dt*1000);
        date = dateObj.toLocaleTimeString("en-US", {timeZone: timezone, month:'long', day:'numeric',year:'numeric', time:'numeric'})
    }
    console.log('this is date = ',date );
    return (
        <Container className={classes.container}>
        <h1 className={classes.title}>Today's Weather - <span className={classes.cityTitle}>{params.city}</span></h1>
 <Container className={classes.weatherContainer}>
            {isLoading?<Loader/>:
            <div>
                <p className={classes.time}>As on {date}</p>
                <h1 className={classes.temp}>{current?.temp}°C</h1>
                <h3 className={classes.feelslike}><span className={classes.feelslikespan}>feels like </span>{current?.feels_like}°C </h3>
                </div>

}

 </Container>
        {/* <h1 className={classes.tagline}>But Weather app lets you plan your days ahead with more confidence..</h1> */}
        {/* <Divider variant="middle" /> */}
        {/* <p className={classes.instructions}>First select the country & then select the city to know the weather there</p> */}
        {/* <div className={classes.buttonContainer}> */}
        {/* </div> */}
    </Container>
    )
}