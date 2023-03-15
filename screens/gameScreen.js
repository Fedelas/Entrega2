import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput } from 'react-native';
import SemordinalapItem from '../components/semordnilapItem';
import { insertScore } from '../db';
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/actions/scoreAction";


export default function GameScreen({navigation}) {
  const dispatch = useDispatch();
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const [list, setList] = useState([
    { name: "DELIVER", key: 1 },
    { name: "DENIM", key: 2 },
    { name: "DESSERTS", key: 3 },
    { name: "REPAID", key: 4 },
    { name: "DOOM", key: 5 },
    { name: "NAMETAG", key: 6 },
    { name: "STEP", key: 7 },
    { name: "REWARDER", key: 8 },
    { name: "STOPS", key: 9 },
    { name: "PEELS", key: 10 },

  ]);


  const [proposedSolution, setProposedSolution] = useState('')

  const clearInput = React.useCallback(() => setProposedSolution(''), []); // function const to clear the value after tested right

  changeHandler = (val) => {
    setProposedSolution(val)
  }


  const handleSaveScore = (val) => {
    dispatch(scoreAction.updateScore(val));
    
  };

 

  const onPressHandler = (name, key) => {
    if (key == 10){
      handleSaveScore(correctAnswers+1)
      
             
      return Alert.alert('GAME FINISH :) ', `Your score is: ${correctAnswers+1}`, [{ text: 'OK', onPress: () => {
        console.log(correctAnswers+1);
        
        navigation.goBack()
      } }])
    }

    if (name == proposedSolution) {
      clearInput();
      setList((prevState => {
        return prevState.filter(itemSelected => itemSelected.key != key)
      }
      ));
      setCorrectAnswers(correctAnswers+1)
      
    } else {
      return Alert.alert('OPPS, that was wrong :( ', '', [{ text: 'CONTINUE', onPress: () => {
        console.log(name);
        console.log(correctAnswers);
        setCorrectAnswers(0)
      } }])
    }
  }

  return (
    <View style={styles.container}>
    <View style={styles.inputSolutionContainer}>
        <TextInput
          autoCapitalize='characters'
          placeholder='Write the Semordnilap for the item below...'
          value={proposedSolution}
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={list}
          style={flexGrow=0}
          renderItem={({ item }) => (
            <SemordinalapItem item={item} onPressHandler={onPressHandler} />
          )}
        />
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
  content: {
    flex: 1,
    backgroundColor: 'white',
    
  },

  inputSolutionContainer: {
    padding: 10,
    marginTop: 100,
    marginBottom: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 50,
  },
});
