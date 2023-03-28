import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Header from '../components/header';
import RulesScreen from './rulesScreen'
import Colors from '../constants/colors';


export default function StartScreen({navigation}) {

    return (
    <View style={styles.container}>
        <RulesScreen newStyle={{fontFamily:"KalamRegular"}} />
        <View style={styles.buttonContainer}>
             <Button title="Play game" onPress={() => navigation.navigate('GameScreen')} color={Colors.secondary} />
            
        </View>
        
     </View>
      
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    fontFamily:'KalamRegular',
    
    
  },
  buttonContainer:{
    flex: 1,
    marginBottom:10
  }


});