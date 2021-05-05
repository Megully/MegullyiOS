import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../assets/colors.json';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

const rallyList=[
{id:0,name:"東京観光ツアー",stampPoint:8,progress:4,date:new Date(),img:'../../assets/img/tokyo.jpg'},
{id:1,name:"君の名はスタンプラリー",stampPoint:10,progress:6,date:new Date(2021, 3, 31, 20, 59, 59, 999),img:'../../assets/img/yourName.jpg'},
{id:2,name:"エモい廃墟",stampPoint:7,progress:2,date:new Date(2021, 3, 15, 15, 59, 59, 999),img:'../../assets/img/ruins.jpg'},
{id:3,name:"中央沿線駅巡り",stampPoint:18,progress:5,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:'../../assets/img/tokyoStation.jpg'},
{id:4,name:"大学食堂カレー巡り",stampPoint:8,progress:7,date:new Date(2021, 2, 19, 1, 59, 59, 999),img:'../../assets/img/curry.jpg'},
{id:5,name:"イルミネーションスポットめぐり",stampPoint:9,progress:1,date:new Date(2021, 2, 3, 21, 59, 59, 999),img:'../../assets/img/illumination.jpg'},
{id:6,name:"珍しい信号機たち",stampPoint:13,progress:9,date:new Date(2020, 11, 29, 23, 59, 59, 999),img:'../../assets/img/trafficLight.jpg'},
];

const Item = ({name}) => (
  <View>
    <Text>{name}</Text>
  </View>
);
export default function Edit() {
  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rallyList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    zIndex:1,
    width:wid,
  },
});