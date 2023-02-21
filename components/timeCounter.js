import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


import { increment, decrement } from '../store/actions/countAction'



import Colors from '../constants/colors'


export default function timeCounter(){

  const dispatch = useDispatch();
 
  const counter = useSelector((store) => store.count.count);
 
  const handleIncrement = () => {
    
      dispatch(increment())
    
  };
 
  const handleDecrement = () => {
    dispatch(decrement())
   
  };


   return(
    <View style={styles.container}>
      
 
      <TouchableOpacity onPress={handleDecrement} style={styles.btn}>
        <Text style={styles.btn_text}> - </Text>
      </TouchableOpacity>

      <Text style={styles.counter_text}>{counter}</Text>
 
      <TouchableOpacity
        onPress={handleIncrement}
        style={{ ...styles.btn}}>
        <Text style={styles.btn_text}> + </Text>
      </TouchableOpacity>
   </View>
   )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        padding: 50,
      },
      title_text: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
      },
      counter_text: {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
      },
      btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 10,}
})

