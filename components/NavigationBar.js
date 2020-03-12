import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import {createAppContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




export class NavigationBar extends Component {
    render() {
        return (
            < View style={saturn.container} >
                
                <Text>aaaa</Text>
            
            </View>
        )
    }
}

const saturn = StyleSheet.create ({

    container:{

        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }

})

export default NavigationBar
