import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header,Left,Icon,Body,Title } from 'native-base'


export class HeaderSaturn extends Component {
    render() {
        return (
            

            <Header
                androidStatusBarColor='gold'
                style={{ backgroundColor: 'white' }}
            >
                <Left>
                    <Icon name="arrow-back" />
                </Left>
                <Body>
                   <Title style={{ color: 'black' }}>{this.props.title}</Title>
                </Body>

            </Header>
        )
    }
}

export default HeaderSaturn




