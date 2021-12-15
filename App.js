import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Image, ImageBackground} from "react-native";
import {TouchableOpacity} from "react-native";
import * as Progress from 'react-native-progress';


export default function App() {


    const [dateTime, setDateTime] = React.useState('Отсутствует');
    return (
        <View style={styles.content}>
            <ImageBackground source={require('./assets/bg.jpg')} style={styles.bgImage}>


                <View style={styles.dateTimeHandler}>
                    <Text style={styles.timeText}>История товаров: {dateTime}</Text>
                    <Text style={styles.timeText}>{dateTime}</Text>
                    <TouchableOpacity style={styles.updateButton} onPress={() => setDateTime(new Date().toLocaleString())}>
                        <Text style={styles.buttonText}>
                            Обновить время
                        </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>


    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',


    },
    timeText: {
        fontSize: 15,

        color: 'white',
    },
    dateTimeHandler:{
        position: 'absolute',
        top: 100,
        display: 'flex',
        alignItems: 'center',
    },
    updateButton:{
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
    },
    buttonText:{
        fontSize: 20,
        color: 'white',
    }

});
