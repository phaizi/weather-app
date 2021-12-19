import React,
{useState,useEffect,useContext} 
from 'react';
import { Outlet } from 'react-router-dom';
import { SelectedContext, WeatherContext } from '../Services/contexts';
import { Regions } from '../Services/Regions';
import { fetchData } from '../Services/fetchData';

export default function City(){

    const [weatherData,setWeatherData] = useState({});
    const [selected,] = useContext(SelectedContext);
    const [isLoading,setLoading] = useState(false);
    const [doesErrorOccured,setError] = useState(false);

    let lat, lon
    if(selected.country && selected.city in Regions[selected.country]){
        const cityCooridates = Regions[selected.country][selected.city];
        lat = cityCooridates.lat;
        lon = cityCooridates.lon;
        console.log('lat aur lon chal gaye if wale')
    }
    /*this is done because on page refresh City component runs before setSelected which is assync 
    so selected.country & selected.city is undefined and hence cityCoordinates will throw error
    another purpose is if u clear the country's search then cityCoordinates again goes undefined and throws error*/
console.log(`lat = ${lat}    lon = ${lon}`);
    useEffect(()=>{ 
        if(lat){
            setLoading(true);
            fetchData(lat,lon,setWeatherData,setLoading,setError);

        }
      },[lat,lon,setWeatherData,setLoading,setError])
 
// const [weather,setWeather] = useState({current:{},hourly:[],daily:[]});    

    return (
      <WeatherContext.Provider value={[weatherData, setWeatherData, isLoading, doesErrorOccured]}>

        <div>
        <Outlet/>
        </div>
        </WeatherContext.Provider>
    )
}