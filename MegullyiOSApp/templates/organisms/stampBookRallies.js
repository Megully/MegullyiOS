import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../assets/colors.json';
import StampBookRallyList from './molecules/stampBookRallyList.js';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

const rallyList=[
{id:'0',name:"東京観光ツアー",stampPoint:8,progress:4,date:new Date(),img:require('../../assets/img/tokyo.jpg'),author:'parfait9'},
{id:'1',name:"山手線駅巡り",stampPoint:30,progress:4,date:new Date(),img:require('../../assets/img/tokyoStation.jpg'),author:'meguruuu'},
{id:'2',name:"道祖神巡り",stampPoint:10,progress:6,date:new Date(2021, 3, 31, 20, 59, 59, 999),img:require('../../assets/img/dousojin.jpg'),author:'すみどら'},
{id:'3',name:"四国八十八カ所",stampPoint:88,progress:24,date:new Date(2021, 3, 15, 15, 59, 59, 999),img:require('../../assets/img/shikoku.png'),author:'masa2004'},
{id:'4',name:"東京の御朱印集めました。",stampPoint:18,progress:5,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:require('../../assets/img/meijiJingu.jpg'),author:'巡田太郎'},
{id:'5',name:"珍しい矢印標識",stampPoint:12,progress:11,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:require('../../assets/img/arrowSign.png'),author:'MugiSus'},
{id:'6',name:"スーパー銭湯",stampPoint:6,progress:2,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:require('../../assets/img/superSento.png'),author:'めぐる'},
{id:'7',name:"呪術廻戦OP聖地巡り(*'▽')",stampPoint:6,progress:2,date:new Date(2021, 3, 6, 18, 59, 59, 999),img:require('../../assets/img/gojo.png'),author:'愉廼'},
{id:'8',name:"♥ℍ𝕒𝕣𝕒𝕛𝕦𝕜𝕦 𝕡𝕙𝕠𝕥𝕠 𝕤𝕡𝕠𝕥♥",stampPoint:5,progress:1,date:new Date(2021, 3, 4, 17, 59, 59, 999),img:require('../../assets/img/harajuku.jpg'),author:'夢叶.'},
{id:'9',name:"東京のおしゃれなカフェ巡り♪",stampPoint:8,progress:5,date:new Date(2021, 2, 22, 17, 59, 59, 999),img:require('../../assets/img/cafe.jpg'),author:'めぐこ'},
];

const Item = ({name,stampPoint,progress,img,date,author}) => (
  <View>
    <StampBookRallyList name={name} img={img} date={date} stampPoint={stampPoint} progress={progress} author={author}/>
  </View>
);
export default function StampBookRallies() {
  const renderItem = ({ item }) => (
    <Item name={item.name} img={item.img} date={item.date} stampPoint={item.stampPoint} progress={item.progress} author={item.author}/>
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
    height:hei -125,
    position:'relative',
    top:25,
  },
});