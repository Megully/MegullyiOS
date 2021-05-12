import React from 'react';
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

export default function MyRallyList(props) {
const date =formatDistance(props.date, new Date(), { addSuffix: true,locale: ja});
return (
  <View style={styles.container}>
    <View style={styles.titles}>
      <PlaceImg img={props.img}/>
      <View style={styles.aboutPlace}>
        <PlaceNameBody name={props.name}/>
        <MyRallyDate date={date}/>
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
});