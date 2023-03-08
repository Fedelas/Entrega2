import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageSelector from '../components/imageSelector';

import TimeCounter from '../components/timeCounter';
export default function Settings({ newStyle }) {



  return (
    <View style={styles.container}>
        <Text style={styles.containerTitle}> Select time between 15 and 90 seconds</Text>
        <TimeCounter />
        <ImageSelector onImage={image => console.log(image)} />
      
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 100,
    flex:1
  },
  containerTitle: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },

  textContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 50,

  },

  image:{
    width:50,
    height:50,
    marginBottom:50,
    backgroundColor:"red"
},


});

