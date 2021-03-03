import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-native-tabs';
import {createAppContainer} from 'react-navigation';
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'

export default class App extends React.Component {
  render(){
  return (
    <View >
    <AppContainer/>
    </View>
  );}
}

const BottomTabNavigator = createBottomTabNavigator({
ReadStory:ReadStory,
WriteStory:WriteStory
})

var AppContainer = createAppContainer(BottomTabNavigator)

const styles = StyleSheet.create({
  
});
