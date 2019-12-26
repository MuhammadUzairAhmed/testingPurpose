
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './app/components/Main'
import Eventlist from './app/components/listOfEvents';

class App extends Component{
  render(){
    return(
      <Main />
      // <Eventlist />
    )
  }
}

export default App;
