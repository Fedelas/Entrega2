
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput } from 'react-native';
import Header from './components/header';
import SemiordinalapItem from './components/semiordnilapItem';


export default function App() {

  const [list, setList] = useState([
    { name: "ABJURE", key: 1 },
    { name: "AGONISTIC", key: 2 },
    { name: "AIRLINE", key: 3 },
    { name: "BANDIT", key: 4 },
    { name: "BANQUET", key: 5 },
    { name: "BINOCULARS", key: 6 },
    { name: "BIOLOGIST", key: 7 },
    { name: "BLACKBOARD", key: 8 },
    { name: "BOARD", key: 9 },
    { name: "BOOKWORM", key: 10 },
    { name: "FUTURE", key: 11 },
    { name: "GARLAND", key: 12 },
    { name: "GIGANTIC", key: 13 },
    { name: "GOOFY", key: 14 },
    { name: "GOVERNMENT", key: 15 },
    { name: "GRANDNIECES", key: 16 },
    { name: "HANDBOOK", key: 17 },
    { name: "HIMSELF", key: 18 },
    { name: "INDULGE", key: 19 },
    { name: "INFLATABLE", key: 20 },
    { name: "PICNIC", key: 21 },
    { name: "PROTECT", key: 22 },
    { name: "PUBLISH", key: 23 },
    { name: "QUADRANGLE", key: 24 },
    { name: "RECOUNT", key: 25 },
    { name: "REDOUBTABLE", key: 26 },
    { name: "REFLECTION", key: 27 },
    { name: "REPORTER", key: 28 },
    { name: "RING", key: 29 },
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
      <Header />
      <View style={styles.inputSolutionContainer}>
        <TextInput
          autoCapitalize='characters'
          placeholder='Write the Semiordnilap for the item below...'
          value={proposedSolution}
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <SemiordinalapItem item={item} onPressHandler={onPressHandler} />
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
