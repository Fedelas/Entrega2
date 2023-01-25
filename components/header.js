import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors'


export default function Header(){
   return(
   <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Semordnilap</Text>
   </View>)
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:Colors.primary,
        padding:10,
        marginTop:50,
        marginBottom:5,
        
    },
    headerTitle:{
        fontWeight:'bold',
        fontSize:30,
    }
})