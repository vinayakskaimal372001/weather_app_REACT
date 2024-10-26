import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric'
    )
      .then((response) => response.json()) 
      .then((data) => setWeather(data)) 
      .catch((error) => console.error("Error fetching weather data:", error)); 
  }, []); 
  return (
    <div style={{ textAlign: "center", marginTop: "34vh",alignItems:"center",justifyContent:"center",boxShadow:"0px 2px 3px 6px" }}>
      {weather ? (
        <div>
          <h1>Weather in {weather.name}</h1>
          <h2>Temperature: {weather.main.temp}°C</h2>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
