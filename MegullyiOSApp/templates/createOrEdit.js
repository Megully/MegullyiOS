import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Edit from './organisms/edit.js';
import NavBar from './organisms/navBar.js';
import Header from './organisms/header.js';
import FloatingButton from './organisms/floatingButton.js';
import PlaceInfo from './organisms/placeInfo.js';
import Colors from '../assets/colors.json'


export default function CreateOrEdit() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="自分のラリー"/>
      <Edit />
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