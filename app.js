import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TabBarIOS } from 'react-native';
import { StyleSheet, Text, View,Image,} from 'react-native';
import {createAppContainer,NavigationContainer} from "react-navigation"
import {createBottomTabNavigator,createTabNavigator} from "react-navigation-tabs"
import {ReadStoryScreen} from './screens/readStoryScreen'
import {WriteStoryScreen} from './screens/writeStoryScreen'

const Tab=createBottomTabNavigator()

export default class App extends React.Component{
    render(){
        return(
            <View>
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen name="readStoryScreen" Component={ReadStoryScreen}/>
                <Tab.Screen name="writeStoryScreen" Component={WriteStoryScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
            </View>
        )
    }
}
const AppContainer=createAppContainer(navigator)