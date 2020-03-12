import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export class NeptunInput extends Component {
    render() {
        return (
            <TextInput
                    placeholder={this.props.placeholder}
                    style={saturn.inputstyle}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                />
        )
    }
}

const saturn = StyleSheet.create({

    inputstyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 8,
        paddingLeft: 16,
        marginTop: 15

    },

})

export default NeptunInput
