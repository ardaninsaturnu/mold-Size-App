import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export class Login extends Component {
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

                <TouchableOpacity
                    style={saturn.buttonStyle}
                >
                    <Text style={saturn.textColor}>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={{
                    justifyContent:"space-between",
                    flexDirection:"row",
                    marginHorizontal:20,
                    marginTop:16
            }}>
                    <TouchableOpacity>
                        <Text>
                            Beni Hatirla
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            forget password ?
                        </Text>
                    </TouchableOpacity>
                </View>

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


export default Login
