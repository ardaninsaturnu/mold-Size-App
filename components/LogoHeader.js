import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class LogoHeader extends Component {
    render() {
        return (
            <View style={saturn.headerStyle}>
                

                <Text style={saturn.logoStyle}>MOLDSIZE</Text>

                <Text style={{fontWeight:'bold', fontSize:20, marginTop:25}}>Hello</Text>

                <Text style={{fontSize:15, marginTop:10}}>if you have a account entry or no create a account!</Text>


            </View>
        )
    }
}

const saturn = StyleSheet.create ({

    headerStyle : {
        backgroundColor :'gold',
        height:230,
        justifyContent: 'center',
        alignItems: 'center',

    },

    logoStyle : {

        color:'white',
        fontWeight: 'bold',
        fontSize: 35 ,
        borderColor :'white',
        borderWidth: 1,
        paddingHorizontal : 10

    }

})

export default LogoHeader
