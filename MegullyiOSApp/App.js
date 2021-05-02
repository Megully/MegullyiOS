import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Home from './templates/home.js';
import CreateOrEdit from './templates/createOrEdit.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './assets/colors.json';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "map-marker-alt";
            } else if (route.name === 'CreateOrEdit') {
              iconName = "edit";
            }else if (route.name === 'StampBook') {
              iconName = "book-open";
            }else if (route.name === 'Settings') {
              iconName = "cog";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:Colors.colors.mainColor,
          inactiveTintColor:Colors.colors.gray,
          style:styles.navBar,
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'マップ'}}/>
        <Tab.Screen name="CreateOrEdit" component={CreateOrEdit} options={{tabBarLabel: '作成/編集'}}/>
        <Tab.Screen name="StampBook" component={CreateOrEdit} options={{tabBarLabel: 'スタンプ帳'}}/>
        <Tab.Screen name="Settings" component={CreateOrEdit} options={{tabBarLabel: '設定'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    backgroundColor: Colors.colors.background,
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
    marginTop: -20,
    zIndex:2,
    height:60,
    paddingBottom:5,
  },
});
