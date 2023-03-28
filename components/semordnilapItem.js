import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/colors'


export default function SemordinalapItem({item, onPressHandler}){
   
     

    // function to create the Semiordinalap Item
    function semordnilapItem(item) {
        const chars = [...item]
        let result = ''
        for(let i=(chars.length -1);i>=0;i--){
            result = result.concat(chars[i])
        }
        
        return result
    }
   
   
   
   
    return(
    
   <TouchableOpacity onPress={()=>onPressHandler(item.name,item.key)} style={styles.semordinalapItemContainer}>
        <Text style={styles.semordinalapItemTitle}>{semordnilapItem(item.name)}</Text>
   </TouchableOpacity>)
}

const styles = StyleSheet.create({
    semordinalapItemContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.secondary,
        padding:5,
        margin:15,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        marginBottom:150,
    },

    semordinalapItemTitle:{
        flex:1,
        alig:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:Colors.secondary,
        margin:10,
        marginBottom:40,
        marginTop:40,
        borderColor:'black',
        
    }
})