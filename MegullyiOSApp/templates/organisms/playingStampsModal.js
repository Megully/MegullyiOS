import React from 'react';
import { StyleSheet, Text, View,Modal,Pressable,FlatList} from 'react-native';
import {Dimensions} from 'react-native';
import PlayingStampsList from "./molecules/playingStampsList";
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;
import Colors from '../../assets/colors.json';

const stampsList=[
  {id:'0',name:"東京スカイツリー",stamped:true,img:require('../../assets/img/tokyo.jpg')},
  {id:'1',name:"東京駅",stamped:false,img:require('../../assets/img/tokyoStation.jpg')},
  {id:'2',name:"東京タワー",stamped:true,img:require('../../assets/img/dousojin.jpg')},
  {id:'3',name:"東京ビッグサイト",stamped:false,img:require('../../assets/img/shikoku.png')},
  {id:'4',name:"新宿御苑",stamped:true,img:require('../../assets/img/meijiJingu.jpg')},
  {id:'5',name:"コクーンタワー",stamped:true,img:require('../../assets/img/arrowSign.png')},
  {id:'6',name:"レインボーブリッジ",stamped:false,img:require('../../assets/img/superSento.png')},
  {id:'7',name:"原宿",stamped:false,img:require('../../assets/img/gojo.png')},
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
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.onPress}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <FlatList
            data={stampsList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
    marginTop: 10,
    backgroundColor:Colors.colors.background,
    paddingTop: 35,
    height:hei -30,
    alignItems: "center",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  }
});