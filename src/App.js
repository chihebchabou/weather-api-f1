import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/weather/Search';
import Weather from './components/weather/Weather';

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchWeather = query => {
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=3&aqi=no&alerts=no`
      )
      .then(res => {
        //console.log(res.data);
        setResponse(res.data);
        setLoading(false);
      })
      .catch(err => {
        //console.log("err:", err.message);
        setError(err.message);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   searchWeather();
  // }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <Search searchWeather={searchWeather} />
      {loading ? (
        <div> Loading... </div>
      ) : (
        response && <Weather response={response} />
      )}
    </div>
  );
}

export default App;
