import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {Header} from 'react-native-elements'

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View>
              <Header centerComponent={{text:'readstory'}}/>
            </View>
        )
    }
}