export async function fetchData(lat, lon, setState, setLoading, setError) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=a978a3ad25c3536dc40ec965cf31ef56`
    );
    const weatherData = await response.json();
    setState(weatherData);
    setError(false);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    setError(true);
  }
}
