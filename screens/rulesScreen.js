import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function RulesScreen({newStyle}) {


  
    return (
      
        <View style={styles.container}>
    <Text style={styles.containerTitle}> RULES</Text>
        <View style={styles.textContainer}>
      <Text style={newStyle}> 
        Semordnilap is a game where you have to write down the Semordnilap* word for the word given below. 
        Once you write it, click the button to check if it is write.
        If it is correct you get another word, if not you lose.
        
      </Text>
      
      <Text style={newStyle}> 
        *Semordnilap is a word, phrase, or sentence that has the property of forming another word, 
        phrase, or sentence when its letters are reversed. A semordnilap differs from a palindrome 
        in that the word or phrase resulting from the reversal is different from the original word or phrase.
        
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
    },
    containerTitle: {
      flex: 1,
      fontSize: 50,
      textAlign:'center',
      padding:10,
    },
  
    textContainer: {
      padding: 10,
      marginBottom: 200,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      fontSize: 50,
    },
  });
  
