export async function fetchData(lat,lon,setState,setLoading){
    
  try {
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,${exclude}&appid=a978a3ad25c3536dc40ec965cf31ef56`)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=a978a3ad25c3536dc40ec965cf31ef56`)
    const weatherData = await response.json();
    setState(weatherData);
    console.log('weather data = ',weatherData);
    setLoading(false);
  } catch (err) {
    console.log('NETWORK ERROR');
    setLoading(false);
    // setState([]);
  }
  };