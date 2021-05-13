import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Pressable} from 'react-native';
import Header from './organisms/headerMap.js';
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});