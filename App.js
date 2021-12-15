import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Image, ImageBackground} from "react-native";
import {TouchableOpacity} from "react-native";
import * as Progress from 'react-native-progress';
import {TextInput} from "react-native";
import {ScrollView} from "react-native";
import ScrollObject from './Components/ScrollObject';
import {parse} from 'node-html-parser';
import axios from 'axios';
import alert from "react-native-web/dist/exports/Alert";


export default function App() {


    const [dateTime, setDateTime] = React.useState('Отсутствует');
    const [findRequest, setFindRequest] = React.useState('');

    //function split the string into an array of 10,000 characters
    const Logger = (str) => {
        let arr = [];
        for (let i = 0; i < str.length; i += 9999) {
            arr.push(str.substring(i, i + 9999));
        }
        arr.forEach((item, index) => {
            setTimeout(() => {
                console.log(item)
            }, index * 100);
        });

    };


    const qwe = () => {

        axios.get('https://www.kufar.by/l/r~gomel?ot=1&query=%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8').then(r => {
            Logger(r.data.toString());
        })

    }


    function RunParse() {

        setDateTime(new Date().toLocaleString());
        qwe();
    }

    return (
        <View style={styles.content}>
            <ImageBackground source={require('./assets/bg.jpg')} style={styles.bgImage}>


                <View style={styles.dateTimeHandler}>
                    <Text style={styles.timeText}>Дата образца товаров: </Text>
                    <Text style={styles.timeText}>{dateTime}</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Запрос в поисковик"
                        placeholderTextColor="grey"
                        onChangeText={(text) => setFindRequest(text)}/>
                    <TouchableOpacity style={styles.updateButton}
                                      onPress={() => RunParse()}>
                        <Text style={styles.buttonText}>
                            Следить
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollHandler}>
                    <ScrollView style={styles.scroll}>

                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>
                        <ScrollObject text='Товар бла бла бла'/>


                    </ScrollView>
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
    scrollHandler: {

        height: 400,
        position: 'absolute',
        top: 220,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'grey',
    },
    scrollObject: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        padding: 10,
    },
    scroll: {
        backgroundColor: '#fff',
        height: 450,


        padding: 10,
    },
    inputBox: {
        width: 300,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        color: '#fff',

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
    dateTimeHandler: {
        position: 'absolute',
        top: 30,
        display: 'flex',
        alignItems: 'center',
    },
    updateButton: {
        marginTop: 20,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }

});
