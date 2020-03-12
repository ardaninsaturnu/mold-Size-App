import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export class SignUp extends Component {
    render() {
        return (

            <View style={saturn.viewStyle}>
                <TextInput
                    placeholder={'Enter your mail'}
                    style={saturn.inputstyle}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder={'Enter your password'}
                    style={saturn.inputstyle}
                    keyboardType={"default"}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder={'Enter your password'}
                    style={saturn.inputstyle}
                    keyboardType={"default"}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={saturn.buttonStyle}
                >
                    <Text style={saturn.textColor}>
                        Sign Up
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity 
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop : 16,
                    color:'#B2B2B2'
                    }}>
                    <Text>You have already a account ?</Text>
                </TouchableOpacity>
            </View>




        )
    }
}

const saturn = StyleSheet.create({

    viewStyle :{

        marginTop:10,

    },
    
    inputstyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 8,
        paddingLeft: 16,
        marginTop: 15

    },

    buttonStyle: {
        borderWidth: 1,
        backgroundColor: 'gold',
        width: '90%',
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 25,
        borderRadius: 5
    },

    textColor: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default SignUp
