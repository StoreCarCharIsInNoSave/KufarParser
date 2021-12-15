import React from 'react';
import { Text, View } from 'react-native';

const ScrollObject = ({text}) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text style={{
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
                padding: 10,
            }}>{text}</Text>
            <Text>-------------------------------------------------------------------------</Text>
        </View>
    )
}
export default ScrollObject;