import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../assets/colors.json';
import MyRallyList from './molecules/myRallyList.js';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

const rallyList=[
{id:'0',name:"立川のおいしいグルメ",stampPoint:5,progress:4,date:new Date(),img:require('../../assets/img/tachikawa.jpg')},
{id:'1',name:"君の名はスタンプラリー",stampPoint:10,progress:6,date:new Date(2021, 3, 31, 20, 59, 59, 999),img:require('../../assets/img/yourName.png')},
{id:'2',name:"エモい廃墟",stampPoint:7,progress:2,date:new Date(2021, 3, 15, 15, 59, 59, 999),img:require('../../assets/img/ruins.jpg')},
{id:'3',name:"中央沿線駅巡り",stampPoint:24,progress:5,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:require('../../assets/img/tokyoStation.jpg')},
{id:'4',name:"大学食堂カレー巡り",stampPoint:8,progress:7,date:new Date(2021, 2, 19, 1, 59, 59, 999),img:require('../../assets/img/curry.jpg')},
{id:'5',name:"イルミネーションスポットめぐり",stampPoint:9,progress:1,date:new Date(2021, 2, 3, 21, 59, 59, 999),img:require('../../assets/img/illumination.jpg')},
{id:'6',name:"珍しい信号機たち",stampPoint:13,progress:9,date:new Date(2020, 11, 29, 23, 59, 59, 999),img:require('../../assets/img/trafficLight.jpg')},
];

const Item = ({name,stampPoint,progress,img,date}) => (
  <View>
    <MyRallyList name={name} img={img} date={date}/>
  </View>
);
export default function MyRallies() {
  const renderItem = ({ item }) => (
    <Item name={item.name} img={item.img} date={item.date}/>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={rallyList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex:1,
    width:wid,
    height:hei -130,
    position:'relative',
    top:30,
  },
});