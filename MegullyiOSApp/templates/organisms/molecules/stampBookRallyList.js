import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../assets/colors.json';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import ja from 'date-fns/locale/ja';
import PlaceImg from './atoms/placeImg.js';
import ProgressBar from './atoms/progressBar.js';
import PlaceNameBody from './atoms/placeNameBody.js';
import StampBookAuthor from './atoms/stampBookAuthor.js';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

export default function StampBookRallyList(props) {
const date =formatDistance(props.date, new Date(), { addSuffix: true,locale: ja});
return (
  <View style={styles.container}>
    <View style={styles.titles}>
      <PlaceImg img={props.img}/>
      <View style={styles.aboutPlace}>
        <PlaceNameBody name={props.name}/>
        <StampBookAuthor author={props.author}/>
        <View style={styles.progress}>
          <Text style={styles.text}>{props.progress}/{props.stampPoint}</Text>
          <ProgressBar progress={props.progress/props.stampPoint} />
        </View>
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
  height:120,
},
aboutPlace:{
  width:240,
  flexDirection:'column',
  height:120,
  justifyContent:'center',
  borderBottomColor:Colors.colors.gray,
  borderBottomWidth:2,
},
dirs:{
  flex:1,
},
text: {
  fontSize:14,
  fontWeight:"700",
  color:Colors.colors.text,
  marginTop:-5,
  marginRight:'auto',
  marginLeft:3,
},
progress:{
  flexDirection:'row',
  width:wid-135,
  justifyContent:'space-around',
  marginRight:3,
},

});