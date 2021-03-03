import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStory extends React.Component{
    
render(){
    return(
        <View>
            <Header
            backgroundColor = {'#9c8210'}
            centerComponent = {{text: 'WriteStory', style:{color: '#fff', fontSize:20, fontFamily: 'cursive'}}}/>
        <Image
        source = {require("../assets/write.png")}/>
        <TextInput
        placeholder = "Author of the Book"/>
        <TextInput
        placeholder = "Title of the Book"/>
        <TextInput
        placeholder = "Write the story here"
        multiline = {true}/>
        <TouchableOpacity onPress = {()=>{
            Alert.alert("This action cannot be undone")
        }}>
            <Text>Submit Story</Text>
        </TouchableOpacity>
        </View>
    )
}
}