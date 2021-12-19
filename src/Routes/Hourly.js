import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {  makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import { WeatherContext } from '../Services/contexts';
import Loader from '../Components/Loader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';



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
    listItemsContainer:{
        display:'flex', flexWrap:'wrap',justifyContent:'space-around', color:'white', 
    }
}))

export default function Hourly(){

    const classes = useStyles();
    const params = useParams();
    const [weatherData, , isLoading] = useContext(WeatherContext); 
    const {timezone, hourly} = weatherData;
    console.log('HOURLY WAETHER DATA = ', hourly)

    let todayDate,nextDayDate,dateObj,time

    if(hourly){
        todayDate = new Date(hourly[0].dt*1000).toLocaleDateString("en-US", {timeZone: timezone, month:'long', day:'numeric',weekday:'long'})
    }
    
    return (
        <div className={classes.container}>
        <h1 className={classes.title}>Hourly Weather - <span className={classes.cityTitle}>{params.city.charAt(0).toUpperCase() + params.city.slice(1).toLowerCase()}</span></h1>

 <Container className={classes.weatherContainer}>
            {hourly&&!isLoading?
 <Box sx={{display:'flex',flexWrap:'wrap',gap: '10px'}}>
     <List sx={{width:'100%'}} aria-label="weather details">
         <h2>{todayDate}</h2>
         <Divider/>
     {hourly.map((data,index)=>{
    dateObj = new Date(data.dt*1000);
    nextDayDate = dateObj.toLocaleDateString("en-US", {timeZone: timezone, month:'long', day:'numeric',weekday:'long'})
    time = dateObj.toLocaleTimeString("en-US", {timeZone: timezone, hour:'2-digit', minute:'2-digit'})

    // weatherValues = selectedKeys.map((item,index)=>(
    //     current[item] + ' ' + units[index]
        // ))
        // const hours = new Date(date).getHours()
console.log('this is HOURLY time = ',time)

     return(
        <div>
            {time.slice(0,2)==='12' && time.slice(-2)==='AM' && <div><h2>{nextDayDate}</h2><Divider/></div>}
            <div className={classes.listItemsContainer}>
                <h2 style={{color:'black'}}>{time}</h2>
                <h1 style={{width:'150px'}}>{(Math.round(data.temp * 10) / 10).toFixed(1) + '°C'}</h1>
                <h2>{data.weather[0].main}</h2>
                <div>
                    <h2 style={{width:'250px', marginBottom:0}}>{data.wind_speed + ' meter/sec'}</h2>
                    <p style={{fontSize:15, margin:0}}>{'Wind Speed'}</p>
                </div>
            </div>
            <Divider />
        </div>
     )})
    }
     </List>
     </Box> : <Loader/>
}
</Container>
</div>
    )
}