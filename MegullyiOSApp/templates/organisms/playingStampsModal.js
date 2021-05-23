import React from 'react';
import { StyleSheet, Text, View,Modal,Pressable,FlatList} from 'react-native';
import {Dimensions} from 'react-native';
import PlayingStampsList from "./molecules/playingStampsList";
import Icon from 'react-native-vector-icons/FontAwesome5';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;
import Colors from '../../assets/colors.json';

const stampsList=[
  {id:'0',name:"東京スカイツリー",stamped:true,img:require('../../assets/img/skyTree.jpg')},
  {id:'1',name:"東京駅",stamped:false,img:require('../../assets/img/tokyoStation.jpg')},
  {id:'2',name:"東京タワー",stamped:true,img:require('../../assets/img/tokyoTower.jpg')},
  {id:'3',name:"東京ビッグサイト",stamped:false,img:require('../../assets/img/bigSite.jpg')},
  {id:'4',name:"新宿御苑",stamped:true,img:require('../../assets/img/shinjukuGarden.jpg')},
  {id:'5',name:"浅草",stamped:true,img:require('../../assets/img/kaminarimon.jpg')},
  {id:'6',name:"レインボーブリッジ",stamped:false,img:require('../../assets/img/rainbowBridge.jpg')},
  {id:'7',name:"コクーンタワー",stamped:false,img:require('../../assets/img/cocoonTower.jpg')},
  ];
const Item = ({name,stamped,img}) => (
  <View>
    <PlayingStampsList name={name} stamped={stamped} img={img}/>
  </View>
);
export default function PlayingStampsModal(props) {
  const renderItem = ({ item }) => (
    <Item name={item.name} stamped={item.stamped} img={item.img} />
  );
  return (
    <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon.Button name='times' size={20} color={Colors.colors.text} backgroundColor="#fff" style={styles.icon} onPress={props.onPress} iconStyle={{marginLeft: 20,marginTop:50,}}/>
            <Text style={styles.text}>東京観光ツアー</Text>
            <FlatList
            data={stampsList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.list}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    marginTop: 15,
    backgroundColor:Colors.colors.background,
    paddingTop: 25,
    height:hei -30,
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
    alignItems:'center',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  icon:{
    position:'relative',
    left:300,
    height:100,
    width:100,
    marginRight:wid/2+90,
    marginTop:-52,
    alignItems: 'center',
  },
  text: {
    fontSize:20,
    fontWeight:"800",
    color:Colors.colors.text,
    marginLeft:2,
    marginBottom:30,
    marginTop:-35,
  },
  list:{
    zIndex:1,
  }
});