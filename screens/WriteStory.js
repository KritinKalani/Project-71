import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {Header} from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config.js';

export default class WriteStory extends React.Component{

    constructor(){
        super();
        this.state = {
            Title:"",
            Author:"",
            Story:""
        }
    }

    submitStory = ()=>{
  db.collection("writeStory").add({Title: this.state.Title}, {Author: this.state.Author}, {Story: this.state.Story})
    }
    
render(){
    return(
        <View>
            <Header
            backgroundColor = {'#9c8210'}
            centerComponent = {{text: 'WriteStory', style:{color: '#fff', fontSize:20, fontFamily: 'cursive'}}}/>
        <Image
        source = {require("../assets/write.png")}/>
        <TextInput
        placeholder = "Author of the Book"
        value = {this.state.Author}/>
        <TextInput
        placeholder = "Title of the Book"
        value = {this.state.Title}/>
        <TextInput
        placeholder = "Write the story here"
        multiline = {true}
        value = {this.state.Story}/>
        <TouchableOpacity onPress = {this.submitStory}>
            <Text>Submit Story</Text>
        </TouchableOpacity>
        </View>
    )
}
}