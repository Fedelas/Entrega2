import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeCounter from '../components/timeCounter';
export default function Settings({newStyle}) {


  
    return (
      
        <View style={styles.container}>
    <Text style={styles.containerTitle}> Select time between 15 and 90 seconds</Text>
        
     <TimeCounter />

      
    </View>
  
  
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      marginBottom:100
    },
    containerTitle: {
      fontSize: 50,
      textAlign:'center',
      padding:10,
    },
  
    textContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      fontSize: 50,
      
    },
  });
  
