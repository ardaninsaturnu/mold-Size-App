import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon, Header, Left, Body, Title, Right } from 'native-base'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

import HeaderSaturn from '../components/HeaderSaturn'

export class Account extends Component {
    render() {
        return (

            <View style={{flex:1}}>

                <HeaderSaturn title='User Account'/>

                <View style={saturn.midiContainer}>

                    <Icon name='person' />
                    <Text style={saturn.textStyle}>Users Info</Text>
                
                </View>
                <View style={saturn.midiContainer}>

                    <Icon name='ios-pin' />
                    <Text style={saturn.textStyle}>Adress Info</Text>
                
                </View>
                <View style={saturn.midiContainer}>

                    <Icon name='ios-sync' />
                    <Text style={saturn.textStyle}>Change Password</Text>
                
                </View>
                <View style={saturn.midiContainer}>

                    <Icon name='md-people' />
                    <Text style={saturn.textStyle}>Change Profile</Text>
                
                </View>
                <View style={saturn.midiContainer}>

                    <Icon name='ios-pricetag' />
                    <Text style={saturn.textStyle}>Size Table</Text>
                
                </View>

                <TouchableOpacity style={saturn.buttonStyle}>

                    <Icon name='ios-exit'/>
                    <Text style={saturn.buttonTextStyle}>
                        Exit
                    </Text>

                </TouchableOpacity>

            </View>

        )
    }
}


const saturn = StyleSheet.create({

    midiContainer: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 20

    },
    textStyle :{ 
        fontSize: 18,
         marginStart: 16 
        },
    
    buttonStyle : {
        flexDirection:'row',
        width:100,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:24,
        marginTop:24,
        paddingHorizontal:16,
        paddingVertical:5,
        borderRadius:5

    } ,
    buttonTextStyle :{
        color: 'white',
        marginHorizontal:16,
        fontWeight:'bold'
    }   
})

export default Account
