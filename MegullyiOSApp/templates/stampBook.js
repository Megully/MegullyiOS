import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StampBookRallies from './organisms/stampBookRallies.js';
import NavBar from './organisms/navBar.js';
import Header from './organisms/header.js';
import FloatingButton from './organisms/floatingButton.js';
import PlaceInfo from './organisms/placeInfo.js';
import Colors from '../assets/colors.json'


export default function StampBook() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="スタンプ帳"/>
      <StampBookRallies />
      <FloatingButton />
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