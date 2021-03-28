import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert,LayoutAnimation,Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height * (0.5);
export default function PlaceInfo() {
  const [showInfo, setShowInfo] = React.useState(0);
  const [infoHeight, setInfoHeight] = React.useState(100);
  const handleClick = () => {
    if(showInfo == 0){
      setShowInfo(() => 1);
      LayoutAnimation.easeInEaseOut()
      setInfoHeight(() => 400);
    }else{
      setShowInfo(() => 0);
      LayoutAnimation.easeInEaseOut()
      setInfoHeight(() => 100);
    }
  };
  return (
    <View style={[styles.container, {height: infoHeight}]}>
        <Button
          title="placeinfo"
          onPress={handleClick}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:0,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:wid,
    zIndex:1,
    shadowColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
});