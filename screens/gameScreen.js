import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TextInput, Animated, Dimensions, Button, ScrollView, TouchableOpacity } from 'react-native';
import SemordinalapItem from '../components/semordnilapItem';
import { insertScore } from '../db';
import { useSelector, useDispatch } from "react-redux";
import * as scoreAction from "../store/actions/scoreAction";
import Colors from '../constants/colors';


export default function GameScreen({ navigation }) {
  const { width, height } = Dimensions.get('window');
  const duration = useSelector((state) => state.count.count); // This is the selected duration to guess the word
  const timerAnimation = React.useRef(new Animated.Value(width)).current
  
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

  const changeHandler = (val) => {
    setProposedSolution(val)
  }


  const handleSaveScore = (item) => {
    dispatch(scoreAction.updateScore(item.val));
    dispatch(scoreAction.addScoreToWorldDB(item))

  };
  
  const animation = React.useCallback(() => {
    Animated.sequence([
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(timerAnimation, {
        toValue: width,
        duration: duration * 1000,
        useNativeDriver: true
      })

    ]).start(({finished}) => {
      if(finished){
        console.log("time finished")
        return Alert.alert('YOU LOSE THE GAME :( ','', [{
          text: 'GO TO STARTING PAGE', onPress: () => {
            navigation.goBack()
          }
        }])
      }else{
        console.log("time not finished")
      }
      
      
    })
   
  }, [duration])

  const onPressHandler = (name, key) => {

    if (key == 10) {
      handleSaveScore({playerName:'test',val:correctAnswers + 1})


      return Alert.alert('GAME FINISH :) ', `Your score is: ${correctAnswers + 1}`, [{
        text: 'OK', onPress: () => {
          console.log(correctAnswers + 1);
          navigation.goBack()
        }
      }])
    }

    if (name == proposedSolution) {
      clearInput();
      setList((prevState => {
        return prevState.filter(itemSelected => itemSelected.key != key)
      }
      ));
      setCorrectAnswers(correctAnswers + 1)
      animation()

    } else {
      return Alert.alert('OPPS, that was wrong :( ', '', [{
        text: 'CONTINUE', onPress: () => {
          console.log(name);
          console.log(correctAnswers);
          setCorrectAnswers(0)
        }
      }])
    }
  }

  return (

    <View style={styles.container}>
      <Animated.View
        style={[styles.timerAnimationContainer, {
          width,
          backgroundColor: Colors.secondary,
          transform: [
            {
              translateX: timerAnimation
            }
          ]

        }

        ]} />




      <View style={styles.content}>

        <FlatList
          data={list}
          renderItem={({ item }) => (
            <SemordinalapItem item={item} onPressHandler={onPressHandler} />
          )}
        />

      </View>

      <View style={styles.inputSolutionContainer}>
        
          <TextInput
            autoCapitalize='characters'
            placeholder='Write the Semordnilap for the item upwards...'
            value={proposedSolution}
            onChangeText={changeHandler}
            multiline={true}
            style={ {borderBottomWidth: 1, borderBottomColor: 'grey', textAlign:'center'}}
              
          />
        
      </View>
      
      <View style={styles.buttonContainer}>
             <Button title="Start game" onPress={() => animation()} color={Colors.secondary} />
            
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  
  },
  content: {
    flex: 1,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'white'
  },

  inputSolutionContainer: {
    padding: 10,
    fontSize: 50,
    backgroundColor: 'white',
    alignContent:'center',
        
  },

  startButtonContainer: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 50,
    backgroundColor: 'white',
    padding: 0,
    flex:1
    
  },

  buttonContainer:{
    flex:1,
    marginBottom:10,
    padding:10
  },

  startButtonText: {
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: "white"
  },
  timerAnimationContainer: {
    marginTop: 10,
    padding: 5,
    height: 5
  }
});
