
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useFonts } from 'expo-font';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './components/header';
import GameScreen from './screens/gameScreen';
import RulesScreen from './screens/rulesScreen';
import Colors from './constants/colors';


export default function App() {

  const [loaded] = useFonts({
    KalamRegular: require('./assets/fonts/Kalam-Regular.ttf'),
  })

  const [screenName, setScreenName] = useState("")
  const [disableStartGame, setDisableStartGame] = useState(false)
  const handlePress = (screenName) => {
    setScreenName(screenName)
    setDisableStartGame(true)
  }

  let content = <RulesScreen newStyle={{fontFamily:"KalamRegular"}} />

  if (screenName == "StartGame") {
    content = <GameScreen />
  }
  else {

  }

  if (!loaded) {
    return null
  } else {
    return (
      <View style={styles.container}>
        
        <Header />
        <View>
          <Button title="StartGame" onPress={() => handlePress("StartGame")} disabled={disableStartGame} color={Colors.secondary} />
        </View>
        {content}
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    fontFamily:'KalamRegular'
  },


});
