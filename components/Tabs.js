import React, { Component } from 'react'
import { Text, View, ColorPropType } from 'react-native'
import { Tabs, Tab } from 'native-base'
import Login from './Login'
import SignUp from './SignUp'


export class Tablar extends Component {
    render() {
        return (


            <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 5, borderColor: 'gold' }}>
                <Tab
                    heading='LOGIN'
                    tabStyle={{ backgroundColor: 'white' }}
                    textStyle={{ color: 'gold' }}
                    activeTabStyle={{ backgroundColor: 'White' }}
                    activeTextStyle={{ color: 'gold', fontWeight: 'bold' }}>
                    <Login />
                </Tab>
                <Tab
                    heading='SIGN UP'
                    tabStyle={{ backgroundColor: 'white' }}
                    textStyle={{ color: 'gold' }}
                    activeTabStyle={{ backgroundColor: 'White' }}
                    activeTextStyle={{ color: 'gold', fontWeight: 'bold' }}
                >
                    <SignUp />
                </Tab>

            </Tabs>
        )
    }
}

export default Tablar 
