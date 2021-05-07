import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './organisms/headerMap.js';
import Map from './organisms/map.js';
import NavBar from './organisms/navBar.js';
import PlaceInfo from './organisms/placeInfo.js';
import Colors from '../assets/colors.json';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Map />
      <PlaceInfo  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});