
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './navigation/Navigator';
import TabNavigator from './navigation/TabNavigator';

import { store } from './store/index'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { useFonts } from 'expo-font';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './components/header';
import StartScreen from './screens/startScreen';
import GameScreen from './screens/gameScreen';
import RulesScreen from './screens/rulesScreen';
import Colors from './constants/colors';


export default function App() {

  const [loaded] = useFonts({
    KalamRegular: require('./assets/fonts/Kalam-Regular.ttf'),
  })






  if (!loaded) {
    return null
  } else {
    return (



      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },


});
