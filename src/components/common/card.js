import React from 'react';
import { View } from 'react-native';

export const Card = ({ children }) => (
    <View style={styles.containerStyle}>{children}</View>
);

const styles = {
    containerStyle: {
        // Border
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDDDDD',
        borderBottomWidth: 0,

        // Shadhow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,

        // Margin
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};