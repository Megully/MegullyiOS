import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert,LayoutAnimation,Dimensions} from 'react-native';
import PlaceInfoTop from "./molecules/placeInfoTop.js";
import PlaceInfoBody from "./molecules/placeInfoBody.js";
import Colors from '../../assets/colors.json';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height * (0.5);
export default function PlaceInfo() {
  const [showInfo, setShowInfo] = React.useState(0);
  const [infoHeight, setInfoHeight] = React.useState(50);
  const [iconDir, setIconDir] = React.useState("angle-up");
  const handleClick = () => {
    if(showInfo == 0){
      setShowInfo(() => 1);
      LayoutAnimation.easeInEaseOut();
      setInfoHeight(() => 330);
      setIconDir(() => "angle-down");
    }else{
      setShowInfo(() => 0);
      LayoutAnimation.easeInEaseOut();
      setInfoHeight(() => 50);
      setIconDir(() => "angle-up");
    }
  };
  return (
    <View style={[styles.container, {height: infoHeight}]}>
      <PlaceInfoTop toggle={iconDir} press={handleClick}/>
      <PlaceInfoBody />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:0,
    alignItems: 'center',
    width:wid,
    zIndex:1,
    shadowColor: Colors.colors.shadow,
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
  button:{
    color: Colors.colors.background,
  },
});