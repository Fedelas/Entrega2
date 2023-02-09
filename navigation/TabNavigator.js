import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';


import COLORS from '../constants/colors'
import StartScreen from '../screens/startScreen'
import GameScreen from '../screens/gameScreen'
import Navigator from "./Navigator";
import SettingsNavigator from "./SettingsNavigator";
  
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
      


<Tab.Navigator
 initialRouteName="HomeTab"
 screenOptions={{
    headerShown: false,
    tabBarShowLabel:true,
    tabBarStyle: styles.tabBarStyle

 }
    
 }



>
        <Tab.Screen name="HomeTab" component={Navigator}  
        options={{
            tabBarIcon: () =>(
                <View>
                    <Ionicons name="play" size={24} color ={'black'}/>
                </View>
            )
        }

        }
        />
        <Tab.Screen name="SettingsTab" component={SettingsNavigator} 
        options={{
            tabBarIcon: () =>(
                <View>
                    <Ionicons name="settings" size={24} color ={'black'}/>
                </View>
            )
        }}
        
        />
</Tab.Navigator>


    )
}

export default TabNavigator;


const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: '#fff',
      padding: 5,
      fontFamily:'KalamRegular',
      
      
    },
     
  
  });