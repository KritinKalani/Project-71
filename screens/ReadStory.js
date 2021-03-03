import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStory extends React.Component{

constructor(){
    super();
    this.state = {
        text:''
    }
}

render(){
    return(
        <View>
            <Header
            backgroundColor = {'#9c8210'}
            centerComponent = {{text:'ReadStory', style: {fontSize: 20, color: '#fff', fontFamily: 'cursive'}}}/>
        <Image
        source = {require("../assets/read.png")}/>
        <TextInput
        onChangeText = {text =>{
            this.setState({text:text})
        }}
        value= {this.state.text}/>
        <Text>{this.state.text}</Text>
        </View>
    )
}
}