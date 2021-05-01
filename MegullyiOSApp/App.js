import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Home from './templates/home.js';
import CreateOrEdit from './templates/createOrEdit.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './assets/colors.json';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "map-marker-alt";
            } else if (route.name === 'CreateOrEdit') {
              iconName = "edit";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:Colors.colors.mainColor,
          inactiveTintColor:Colors.colors.gray,
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'マップ'}}/>
        <Tab.Screen name="CreateOrEdit" component={CreateOrEdit} options={{tabBarLabel: '作成/編集'}}/>
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
});
