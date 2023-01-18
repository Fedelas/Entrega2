import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


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
        alignContent:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:"gold",
        padding:10,
        margin:25,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        marginBottom:150,
    },

    semordinalapItemTitle:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:"gold",
        margin:40,
        borderColor:'black',
        
    }
})