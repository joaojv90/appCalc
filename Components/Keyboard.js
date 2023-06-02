import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Button from './Button'

export default function Keyboard(){

    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');

    const handleNumberPress = (number) => {
        setInput(input + number);
    };

    const handleOperatorPress = (operator) => {
        if (operator === '=') {
            setResult(eval(input));
        } else {
            setInput(input + operator);
        }
    };

    const handleClear = () => {
        setResult(0);
        setInput('');
    };

    return (
        <View style={styles.viewBottom}>
            <View style={styles.display}>
                <Text style={styles.result}>{result}</Text>
                <Text style={styles.input}>{input}</Text>
            </View>
                <View style={styles.row}>
                    <Button title="7" onPress={() => handleNumberPress('7')} />
                    <Button title="8" onPress={() => handleNumberPress('8')} />
                    <Button title="9" onPress={() => handleNumberPress('9')} />
                    <Button title="+" onPress={() => handleOperatorPress('+')} />
                </View>
                <View style={styles.row}>
                    <Button title="4" onPress={() => handleNumberPress('4')} />
                    <Button title="5" onPress={() => handleNumberPress('5')} />
                    <Button title="6" onPress={() => handleNumberPress('6')} />
                    <Button title="-" onPress={() => handleOperatorPress('-')} />
                </View>
                <View style={styles.row}>
                    <Button title="1" onPress={() => handleNumberPress('1')} />
                    <Button title="2" onPress={() => handleNumberPress('2')} />
                    <Button title="3" onPress={() => handleNumberPress('3')} />
                    <Button title="*" onPress={() => handleOperatorPress('*')} />
                </View>
                <View style={styles.row}>
                    <Button title="0" onPress={() => handleNumberPress('0')} />
                    <Button title="=" onPress={() => handleOperatorPress('=')} />
                    <Button title="C" onPress={handleClear} />
                    <Button title="/" onPress={() => handleOperatorPress('/')} />
                </View>
        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
        },

        display:{
            height: 120,
            width: "90%",
            justifyContent: "flex-start",
            alignSelf: "center",
            fontWeight: '200',
        },

        result: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        },

        input: {
            fontSize: 18,
            marginBottom: 20,
        },

        row: {
            flexDirection: 'row',
            marginBottom:10,
            justifyContent: "space-between",
        },

        viewBottom: {
            position: 'absolute',
            bottom: 50,
        },
    });