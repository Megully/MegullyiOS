import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Pressable} from 'react-native';
import Header from './organisms/headerMap.js';
import PlayingStampsModal from './organisms/playingStampsModal.js';
import Map from './organisms/map.js';
import NavBar from './organisms/navBar.js';
import PlaceInfo from './organisms/placeInfo.js';
import Colors from '../assets/colors.json';
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    if(modalVisible == true){
      setModalVisible(() => false);

    }else{
      setModalVisible(() => true);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <PlayingStampsModal onPress={() => setModalVisible(!modalVisible)}/>
      </Modal>
      <Header onPress={handleClick}/>
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