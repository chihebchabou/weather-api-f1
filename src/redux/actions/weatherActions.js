import axios from 'axios';
import { IS_ERROR, IS_LOADING, IS_SUCCESSFUL } from './types';

export const searchWeather = query => async dispatch => {
  try {
    dispatch({ type: IS_LOADING });
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=3&aqi=no&alerts=no`
    );
    dispatch({ type: IS_SUCCESSFUL, payload: res.data });
  } catch (err) {
    dispatch({ type: IS_ERROR, payload: err.message });
  }
};
