import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import COLORS from '../constants/colors'
import HighScoreScreens from '../screens/highScoreScreens'






const Stack =createNativeStackNavigator();


const HighScoreNavigator = () => {
    return (
      
        
        <Stack.Navigator 
        initialRouteName="Highscore"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
          <Stack.Screen name="Highscore" component={HighScoreScreens} 
          options={{
            title: "SEMORDNILAP",
          }}
          
          />
          
        </Stack.Navigator>
 

      
       
      )
    
    }



export default HighScoreNavigator;