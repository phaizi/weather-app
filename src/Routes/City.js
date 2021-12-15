import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Services/fetchData';

export default function City({cities}){

    const {city} = useParams();
    const {lat,lon} = cities[city];
    useEffect(()=>{ 
        fetchData(lat,lon);
      },[lat,lon])
 
const [weather,setWeather] = useState({current:{},hourly:[],daily:[]});    

    return (
        <div>City</div>
    )
}