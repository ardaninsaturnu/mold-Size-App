import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import HeaderSaturn from '../components/HeaderSaturn'
import { TouchableOpacity } from 'react-native-gesture-handler'

export class PasswordMail extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn />
                <View style={saturn.contentBox}>
                    <Image
                        source={require('../src/images/sad.png')}
                        style={{ width: 180, height: 180 }} />
                    <Text style={saturn.titleText}>Sended Your verification mail</Text>
                    <Text>Please , Check You E-mail box</Text>
                </View>
                <TouchableOpacity style={saturn.buttonStyle}>
                    <Text style={saturn.textStyle}>Back Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const saturn = StyleSheet.create({
    contentBox: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },


    titleText: {
        marginVertical: 10,
        fontSize: 25,
        color: 'gold',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

    },

    buttonStyle: {
        width:'90%' ,
        height:50,
        marginHorizontal:20,
        backgroundColor:'gold',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    }
})

export default PasswordMail
