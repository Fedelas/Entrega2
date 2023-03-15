import React, { useEffect } from "react";
import { FlatList,StyleSheet,Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/actions/scoreAction";

const HighScoreScreens = () => {
    const dispatch = useDispatch();
    const scores = useSelector((state) => state.scores.scores);

    useEffect(() => {
        console.log(scores);
    }, [scores]);

    useEffect(() => {
        dispatch(scoreAction.loadScore());
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            
            <Text style={styles.textContainer}> {item.score}</Text>
            

        </View>
    );

    return (
        <View style={styles.container}>
        <Text style={styles.containerTitle}> HIGHSCORES</Text>
        
        
        <FlatList
            data={scores}
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
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 50,

    },

    
});

