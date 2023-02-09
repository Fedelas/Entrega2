import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Settings({newStyle}) {


  
    return (
      
        <View style={styles.container}>
    <Text style={styles.containerTitle}> SETTINGS</Text>
        <View style={styles.textContainer}>
      <Text style={newStyle}> 
     TIMER 
      </Text>

      </View>
    </View>
  
  
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      marginBottom:200
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
  
