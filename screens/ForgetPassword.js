import React, { Component } from 'react'
import { Text, View,Image, StyleSheet,TextInput } from 'react-native'

import HeaderSaturn from '../components/HeaderSaturn'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MercureButton from '../components/MercureButton'


export class ForgetPassword extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn/>
                <View style={saturn.contentBox}>
                    <Image 
                    source={require('../src/images/sad.png')}
                    style={{width:180,height:180}}/>
                    <Text style={saturn.titleText}>Did You Forget Your Password ?</Text>
                    <Text>Let me send verification Code , Write your e-mail</Text>
                </View>
                <View>
                    <TextInput
                    placeholder={'e-mail adress'}
                    style={saturn.inputStyle}/>
                    <MercureButton text='Send'/>
                </View>
            </View>
        )
    }
}

const saturn = StyleSheet.create ({
    contentBox :{
        backgroundColor:'white',
         justifyContent: 'center',
         alignItems: 'center',
         paddingVertical: 25
    },
   
   
    titleText : {
        marginVertical:10,
        fontSize:25,
        color:'gold',
        textAlign:'center',
        fontWeight:'bold'
    },
    inputStyle :{
        borderWidth:2,
        borderColor:'gold',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:24,
        paddingHorizontal:20

    },
    buttonStyle : {
        width:'90%',
        height:40,
        backgroundColor:'gold',
        marginHorizontal:21,
        marginTop:20,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default ForgetPassword
