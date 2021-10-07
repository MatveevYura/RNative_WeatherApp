import React from "react";
import PropTypes from 'prop-types'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'


export const weatherConditions = {
  Rain: { icon: 'weather-rainy' },
  Clear: { icon: 'weather-sunny', title: '', subtitle: '' },
  Thunderstorm: { icon: 'weather-lightning' },
  Clouds: { icon: 'weather-cloudy' },
  Snow: { icon: 'weather-snowy' },
  Drizzle: { icon: 'weather-hail' },
  Haze: { icon: 'weather-hail' },
  Mist: { icon: 'weather-fog' }
};

export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998']}
      style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[condition].icon}
          color={'white'}
        />
        <Text style={styles.temp} >{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>Погода на сегодня:</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
      <StatusBar barStyle="light-content" />
    </LinearGradient >
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,

  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textTransform: "capitalize",

  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',

  }
})