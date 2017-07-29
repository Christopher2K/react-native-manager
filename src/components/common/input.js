import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={styles.inputStyle}
            onChangeText={onChangeText}
            value={value}
        />
    </View>
); 

const styles = {
    inputStyle: {
        color: '#000000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignItems: 'center'
    } 
};