import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../assets/colors.json';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import ja from 'date-fns/locale/ja';
import PlaceImg from './atoms/placeImg.js';
import MyRallyDate from './atoms/myRallyDate.js';
import PlaceNameBody from './atoms/placeNameBody.js';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;
import ContentLoader, { Facebook } from 'react-content-loader/native'

function StampedChecker(props){
  if(props.stamped == 1){
    return(<PlaceImg img={props.img}/>);
  }else{
    return(<Icon name='map-marker-alt' size={70} color={Colors.colors.gray} style={styles.icon}/>);
  }
}
export default function PlayingStampsList(props) {
return (
  <View style={styles.container}>
    <View style={styles.titles}>
      <StampedChecker stamped={props.stamped} img={props.img}/>
      <View style={styles.aboutPlace}>
        <PlaceNameBody name={props.name}/>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  width:wid,
  flex:1,
  flexDirection:'column',
  backgroundColor:Colors.colors.background,
},
titles:{
  flexWrap:'wrap',
  flexDirection:'row',
  alignItems:'center',
  height:100,
},
aboutPlace:{
  width:250,
  flexDirection:'column',
  height:95,
  justifyContent:'center',
  borderBottomColor:Colors.colors.gray,
  borderBottomWidth:2,
},
dirs:{
  flex:1,
},
icon:{
  marginLeft:23,
  marginRight:24,
}
});