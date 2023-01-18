
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput } from 'react-native';
import Header from './components/header';
import SemiordinalapItem from './components/semiordnilapItem';


export default function App() {

  const [list, setList] = useState([
    {name:'object1', key:'1'},
    {name:'object2', key:'2'}
  ]);

  
  const [proposedSolution, setProposedSolution] = useState('')

  const clearInput = React.useCallback(()=> setProposedSolution(''), []); // function const to clear the value after tested

  changeHandler = (val) =>{
   setProposedSolution(val)
   }




 const onPressHandler = (name,key) => {
  
  if(name==proposedSolution){
      clearInput();
      setList((prevState =>{
        
        return prevState.filter(itemSelected => itemSelected.key != key)
        
      }
        ))
    }else{
      return Alert.alert('nothing change', '',[{text:'OK', onPress:()=>console.log('Alert')}])
    }
  
       
  }


 




  return (
    <View style={styles.container}>
      <Header/>
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
        renderItem={({item})=>(
          <SemiordinalapItem item={item} onPressHandler={onPressHandler}  />
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
    padding:10,
  },
  content:{
    flex:1,
    backgroundColor:'red',},

    inputSolutionContainer:{
      padding:10,
      marginBottom:5,
      borderBottomWidth:1,
      borderBottomColor:'grey'
      
  },
});
