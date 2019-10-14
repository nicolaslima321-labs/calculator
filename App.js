import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {

  state = {
    displayValue: 0
  }

  addDigit = (number) => {
    this.state.displayValue == 0 ? number = (parseInt(number) + parseInt(this.state.displayValue)) : number += this.state.displayValue;    
    this.setState({ displayValue: number })
  }

  clearMemory = () => {
    this.setState({ displayValue: 0 })
  }

  setOperation = (operation) => {
    this.setState({ operation: operation })
  }

  render () {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory}/>
          <Button label="/" operation onClick={this.setOperation}/>
          <Button label="7" onClick={this.addDigit}/>
          <Button label="8" onClick={this.addDigit}/>
          <Button label="9" onClick={this.addDigit}/>
          <Button label="*" operation onClick={this.setOperation}/>
          <Button label="4" onClick={this.addDigit}/>
          <Button label="5" onClick={this.addDigit}/>
          <Button label="6" onClick={this.addDigit}/>
          <Button label="-" operation onClick={this.setOperation}/>
          <Button label="1" onClick={this.addDigit}/>
          <Button label="2" onClick={this.addDigit}/>
          <Button label="3" onClick={this.addDigit}/>
          <Button label="+" operation onClick={this.setOperation}/>
          <Button label="0" double onClick={this.addDigit}/>
          <Button label="." onClick={this.addDigit}/>
          <Button label="=" operation onClick={this.setOperation}/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FC9400",
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
