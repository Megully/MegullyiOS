import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './organisms/header.js';
import Body from './organisms/body.js';
import NavBar from './organisms/navBar.js';
import PlaceInfo from './organisms/placeInfo.js';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <NavBar />
      <PlaceInfo  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});