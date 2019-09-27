import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, Picker, Text } from 'react-native';



export default function App() {

 const [operator, onOperatorChange] = useState("+")
 const [input1, onInput1Change] = useState("")
 const [input2, onInput2Change] = useState("")
 const [output, onOutputChange] = useState("")

 function calculate() {
  switch(operator) {
    case "+":
    onOutputChange(String(parseInt(input1) + parseInt(input2)))
    break;

    case "-":
    onOutputChange(String(parseInt(input1) - parseInt(input2)))
    break;

    case "*":
    onOutputChange(String(parseInt(input1) * parseInt(input2)))
    break;

    case "/":
    onOutputChange(String(parseInt(input1) / parseInt(input2)))
    break;
  }
 }

  return (
    <View style={styles.container}>
      <TextInput value={input1} onChangeText={text => onInput1Change(text)} style={{marginTop: 50, borderWidth: 1}} keyboardType="numeric" />
      <TextInput value={input2} onChangeText={text => onInput2Change(text)} style={{marginTop: 50, borderWidth: 1}} keyboardType="numeric" />
      <Button title="Calculate" onPress={() => calculate()} /> 
      <Picker
          selectedValue={operator}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
          onOperatorChange(itemValue)
          }>
          <Picker.Item label="+" value="+" />
          <Picker.Item label="-" value="-" />
          <Picker.Item label="*" value="*" />
          <Picker.Item label="/" value="/" />
        </Picker>
        <Text>{output}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
