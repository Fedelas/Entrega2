import React from "react";
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


import COLORS from '../constants/colors'
import StartScreen from '../screens/startScreen'
import GameScreen from '../screens/gameScreen'
import Navigator from "./Navigator";
import SettingsNavigator from "./SettingsNavigator";
import HighScoreNavigator from "./HighScoreNavigator";
import OwnScoresNavigator from "./OwnScoresNavigator"

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (



        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.tabBarStyle

            }

            }



        >
            <Tab.Screen name="Home" component={Navigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="play" size={24} color={'black'} />
                        </View>
                    )
                }

                }
            />
            <Tab.Screen name="Settings" component={SettingsNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="settings" size={24} color={'black'} />
                        </View>
                    )
                }}

            />

            <Tab.Screen name="Own scores" component={OwnScoresNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <AntDesign name="book" size={24} color="black" />
                        </View>
                    )
                }}

            />

            <Tab.Screen name="Highscores" component={HighScoreNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <AntDesign name="book" size={24} color="black" />
                        </View>
                    )
                }}

            />





        </Tab.Navigator>


    )
}

export default TabNavigator;


const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 5,
        fontFamily: 'KalamRegular',


    },


});