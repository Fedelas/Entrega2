import React, { useEffect } from "react";
import { FlatList,StyleSheet,Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/actions/scoreAction";
import { getHighscore } from "../store/actions/highScoreAction";

const HighScoreScreens = () => {
    const dispatch = useDispatch();
    const highScoreGlobal = useSelector((state) => state.highScoreGlobal.list);
    console.log(highScoreGlobal)

    useEffect(() => {
        dispatch(getHighscore());
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.textContainer}> {item.item.playerName}</Text>
            <Text style={styles.textContainer}> {item.item.val}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
       
        <Text style={styles.containerTitle}> HIGHSCORES GLOBAL</Text>

        <FlatList
            data={highScoreGlobal}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />

    </View>

        
    );
};

export default HighScoreScreens;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 100,
        flex: 1
    },
    containerTitle: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
    },

    textContainer: {
        padding: 10,
        fontSize: 50,
        textAlign:'center'

    },

    
});