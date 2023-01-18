import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(){
   return(
   <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Semordnilap</Text>
   </View>)
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:"coral",
        padding:10,
        marginTop:50,
        marginBottom:5,
        
    },
    headerTitle:{
        fontWeight:'bold',
        fontSize:30,
    }
})