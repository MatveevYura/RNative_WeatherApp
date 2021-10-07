import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '1a0118170d7e56b406ef1df59c20cb93';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=ru&units=metric`);
    this.setState({ isLoading: false, temp: temp, condition: weather[0].main, description: weather[0].description });
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, description } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} description={description} />
    );
  }
}