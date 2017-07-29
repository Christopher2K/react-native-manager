import React from 'react';
import { View } from 'react-native';

export const CardSection = ({ children }) => (
    <View style={styles.containerStyle}>
        {children}
    </View>
);


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
        padding: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
};