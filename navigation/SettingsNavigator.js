import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import COLORS from '../constants/colors'
import Settings from '../screens/settings'




const Stack =createNativeStackNavigator();


const SettingsNavigator = () => {
    return (
      
        
        <Stack.Navigator 
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
          <Stack.Screen name="Settings" component={Settings} 
          options={{
            title: "SEMORDNILAP",
          }}
          
          />
          
        </Stack.Navigator>
 

      
       
      )
    
    }



export default SettingsNavigator;