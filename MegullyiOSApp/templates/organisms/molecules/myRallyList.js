import React from 'react';
import { StyleSheet, Text, View ,Image, FlatList,SafeAreaView} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../assets/colors.json';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import ja from 'date-fns/locale/ja';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

export default function MyRallyList(props) {
const date =formatDistance(props.date, new Date(), { addSuffix: true,locale: ja});
  return (
    <View style={styles.container}>
        <Text>{props.name}</Text>
        <Text>{date}</Text>
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