import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;



export default function MyRallyList(props) {
  return (
    <View style={styles.container}>
        <Text>{props.name}</Text>
        <Text>{props.stampPoint}</Text>
        <Text>{props.progress}</Text>
        <Image
          style={{
            width: 100,
            height: 100
          }}
          source={props.img}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    zIndex:1,
    width:wid,
  },
});