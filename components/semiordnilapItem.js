import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function SemiordinalapItem({item, onPressHandler}){
   
    

    function semiordnilapItem(item) {
        const chars = [...item]
        let result = ''
        for(let i=(chars.length -1);i>=0;i--){
            result = result.concat(chars[i])
        }
        
        return result.toUpperCase()
    }
   
   
   
   
    return(
    
   <TouchableOpacity onPress={()=>onPressHandler(item.name,item.key)}>
        <Text style={styles.semiordinalapItemTitle}>{semiordnilapItem(item.name)}</Text>
   </TouchableOpacity>)
}

const styles = StyleSheet.create({
    
    semiordinalapItemTitle:{
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:"gold",
        padding:10,
        marginBottom:5,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
    }
})