import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import HeaderSaturn from '../components/HeaderSaturn'
import MercureButton from '../components/MercureButton'

export class ChangePassword extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn title='Change Password'/>
                <Text style={saturn.textStyle}>last Password</Text>
                <TextInput
                    placeholder={'Enter your password'}
                    style={saturn.inputstyle}
                    keyboardType={"default"}
                    secureTextEntry={true}
                />
                <Text style={saturn.textStyle}>new password</Text>
                <TextInput
                    placeholder={'Enter your password'}
                    style={saturn.inputstyle}
                    keyboardType={"default"}
                    secureTextEntry={true}
                />
                <Text style={saturn.textStyle}>new password (repeat)</Text>
                <TextInput
                    placeholder={'Enter your password'}
                    style={saturn.inputstyle}
                    keyboardType={"default"}
                    secureTextEntry={true}
                />
                <MercureButton text='Update'/>
            </View>
        )
    }
}

const saturn = StyleSheet.create ({

    inputstyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 8,
        paddingLeft: 16,
        marginTop: 15,
        borderColor:'gold'

    },
    textStyle: {
        marginTop:10,
        marginLeft:16,
        fontSize:16
    }

})

export default ChangePassword
