import React from 'react';
import { Text, View } from 'react-native';


export const Header = ({ title }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 70,
        padding: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        position: 'relative',
    },
    textStyle: {
        paddingTop: 15,
        fontSize: 20
    }
};