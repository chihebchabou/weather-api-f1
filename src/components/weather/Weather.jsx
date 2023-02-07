import React from 'react';
import { useSelector } from 'react-redux';

const Weather = () => {
  const { response, loading, error } = useSelector(state => state.weather);
  const forecastdays =
    response !== null &&
    response.forecast.forecastday.map((el, i) => {
      const date = new Date(el.date);
      return <td key={i}>{date.toString().slice(0, 3)}</td>;
    });

  const maxtemps =
    response !== null &&
    response.forecast.forecastday.map((el, i) => (
      <td key={i}>{el.day.maxtemp_c}</td>
    ));

  const mintemps =
    response !== null &&
    response.forecast.forecastday.map((el, i) => (
      <td key={i}>{el.day.mintemp_c}</td>
    ));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    response !== null && (
      <div className="card">
        <h2>{response.location.name}</h2>
        <h3>
          {response.current.condition.text}
          <span>
            Wind {response.current.wind_kph}km/h
            <span className="dot">•</span> Precip {response.current.precip_in}%
          </span>
        </h3>
        <h1>{response.current.temp_c}°</h1>
        <div className="sky">
          <img
            style={{ width: '100%' }}
            src={response.current.condition.icon}
            alt=""
          />
        </div>
        <table>
          <thead>
            <tr>
              {/* <td>TUE</td>
          <td>WED</td>
          <td>THU</td>
          <td>FRI</td>
          <td>SAT</td> */}
              {forecastdays}
            </tr>
          </thead>
          <tbody>
            <tr>{maxtemps}</tr>
          </tbody>
          <tfoot>
            <tr>{mintemps}</tr>
          </tfoot>
        </table>
      </div>
    )
  );
};

export default Weather;
