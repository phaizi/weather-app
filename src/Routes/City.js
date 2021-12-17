import React,
{useState,useEffect,useContext} 
from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { SelectedContext, WeatherContext } from '../Services/contexts';
import { Regions } from '../Services/Regions';
import { fetchData } from '../Services/fetchData';

export default function City(){

    const [weatherData,setWeatherData] = useState({});
    const [selected,setSelected] = useContext(SelectedContext);
    const [isLoading,setLoading] = useState(false);
    // const [weatherData,setWeatheData] = useContext(WeatherContext);
    // const {city} = useParams();
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
            fetchData(lat,lon,setWeatherData,setLoading);

        }
      },[lat,lon,setWeatherData,setLoading])
 
// const [weather,setWeather] = useState({current:{},hourly:[],daily:[]});    

    return (
      <WeatherContext.Provider value={weatherData, setWeatherData}>

        <div>

        <div>City is {selected.city}  </div>
        {/* <div>wether is {weatherData}  </div> */}
        <Outlet/>
        </div>
        </WeatherContext.Provider>
    )
}