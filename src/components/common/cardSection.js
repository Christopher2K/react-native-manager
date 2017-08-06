import React from 'react';
import { View } from 'react-native';

export const CardSection = ({ children, style }) => (
    <View style={[styles.containerStyle, style]}>
        {children}
    </View>
);


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#DDDDDD',
        position: 'relative',
    }
};
