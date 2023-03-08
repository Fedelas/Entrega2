import React, {useState} from "react";

import { View, Button,Image, Text, StyleSheet, Alert } from "react-native";

import * as ImagePicker from 'expo-image-picker'

import Colors from '../constants/colors';



const ImageSelector = (props) => {
    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                "Permissions denied",
                "Permissions must be allowed before continuing",
                [{text: 'Ok'}]
            )
            return false
        }   
        return true
    }

    const HandleTakeImage = async() => {
        const isCameraOk = await VerifyPermissions()
        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync(
            {
                allowsEditing: false,
                aspect:[16,9],
                quality: 0.3
            }
        )

        setPickedUri(image.assets[0].uri)
        props.onImage(image.assets[0].uri)
    }

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
            <Image style={styles.image} source={{ uri:pickedUri}}/>
            </View>
            <Button
                title="AVATAR Picture"
                onPress={HandleTakeImage}

            />

        </View>


    )


}

export default ImageSelector

const styles = StyleSheet.create({

    container:{
        marginBottom:10,
        
    },
    preview:{
        width:"100%",
        height:200,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:Colors.primary,
        borderWidth:2,
        borderRadius:10
        
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:10
        
        
    }

})




