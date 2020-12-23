import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Header centerComponent={{text:'writestory'}}/>
                <TextInput/>
                <TextInput/>
                <TextInput multiline={true}/>
                <TouchableOpacity>
                    submit
                </TouchableOpacity>
            </View>
        )
    }
}