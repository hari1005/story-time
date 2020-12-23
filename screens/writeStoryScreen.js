import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {Header} from 'react-native-elements'
import db from '../config'

export default class WriteStoryScreen extends React.Component{
    render(){
        this.state={
            author:"",
            title:"",
            story:""
        }
        return(
            <View>
                <Header centerComponent={{text:'writestory'}}/>
                <TextInput onChangeText={text=>this.setState(title=text)}/>
                <TextInput onChangeText={text=>this.setState(author=text)}/>
                <TextInput multiline={true} onChangeText={text=>this.setState(story=text)}/>
                <TouchableOpacity>
                    submit
                </TouchableOpacity>
            </View>
        )
        db.collection("storybook").add({ 
          'author':this.state.author,
          'title':this.state.title,
          'story':this.state.story
        })
    }
}