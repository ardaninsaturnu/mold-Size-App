import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'

export class MercureButton extends Component {
    render() {
        return (
            
            <TouchableOpacity style={saturn.buttonStyle}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const saturn = StyleSheet.create({
    buttonStyle: {

        width: '90%',
        height: 40,
        backgroundColor: 'gold',
        marginHorizontal: 21,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default MercureButton
