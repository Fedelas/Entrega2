import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput } from 'react-native';
import SemordinalapItem from '../components/semordnilapItem';


export default function GameScreen() {

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



  const onPressHandler = (name, key) => {

    if (name == proposedSolution) {
      clearInput();
      setList((prevState => {
        return prevState.filter(itemSelected => itemSelected.key != key)
      }
      ))
    } else {
      return Alert.alert('OPPS, that was wrong :( ', '', [{ text: 'OK', onPress: () => console.log(name) }])
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
