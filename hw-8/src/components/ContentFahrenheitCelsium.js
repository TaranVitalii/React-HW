import React from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import convertFahrenheit from '../utils/fahrenheitToCelsium';
import {h, w} from '../constants';

console.log(h, w);
class InputWithFahrenheitButton extends React.Component {
  state = {value: '', isValid: true, validValue: '', convertValue: ''};

  validate = text => {
    if (isNaN(text)) {
      this.setState({
        isValid: false,
        validValue: 'uncorrect input data',
        value: '',
      });
    } else {
      this.setState({isValid: true, value: text, validValue: ''});
    }
  };

  render() {
    const {
      mainField,
      outputField,
      outputValue,
      inputBorderGray,
      inputBorderRed,
      inputError,
      textError,
    } = styles;
    return (
      <View style={mainField}>
        <View style={outputField}>
          <Text style={outputValue}>{this.state.convertValue}</Text>
        </View>
        <View>
          <TextInput
            style={this.state.isValid ? inputBorderGray : inputBorderRed}
            onChangeText={text => this.validate(text)}
          />
        </View>
        <View style={inputError}>
          <Text style={this.state.isValid ? textError : null}>
            {this.state.validValue}
          </Text>
        </View>
        <View>
          <Button
            title="Convert to Celsium"
            disabled={!this.state.isValid}
            onPress={() => {
              let fahrenheit = convertFahrenheit(this.state.value);
              this.setState({convertValue: fahrenheit, value: ''});
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainField: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputBorderGray: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputBorderRed: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  inputError: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  textError: {
    fontSize: 15,
    color: 'red',
  },
  inputCenter: {
    // display: 'flex',
  },
  outputField: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 50,
    width: 150,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  outputValue: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
export default InputWithFahrenheitButton;
