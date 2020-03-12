import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Header, Left, Icon, Body, Title, List, ListItem, Subtitle, Right, H1 } from 'native-base'
import UpperBody from '../components/UpperBody'
import UnderBody from '../components/UnderBody'


export class SizeTables extends Component {
    render() {
        return (


            <ScrollView>
                 <Header
                    androidStatusBarColor='gold'
                    style={{ backgroundColor: 'white' }}
                >
                    <Left>
                        <Icon name="arrow-back" />
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }}>Size Table</Title>
                    </Body>

                </Header>
                <UpperBody/>
                <UnderBody/>
                

                
        
            </ScrollView>
                
        )
    }
}



export default SizeTables
