import React
// {useEffect} 
from 'react';
import { Outlet, useParams } from 'react-router-dom';
// import { fetchData } from '../Services/fetchData';

export default function City(){

    const {city} = useParams();
    // const {lat,lon} = cities[city];
    // useEffect(()=>{ 
    //     fetchData(lat,lon);
    //   },[lat,lon])
 
// const [weather,setWeather] = useState({current:{},hourly:[],daily:[]});    

    return (
        <div>

        <div>City is {city} </div>
        <Outlet/>
        </div>
    )
}