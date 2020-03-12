import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LogoHeader from '../components/LogoHeader'
import Login from '../components/SignUp'
import Tablar from '../components/Tabs'


export class Welcome extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                <LogoHeader/>
                <Tablar/>
                
            </View>
        )
    }
}

export default Welcome
