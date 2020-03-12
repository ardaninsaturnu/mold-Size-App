import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderSaturn from './HeaderSaturn'
import { Header, Input, Item, Icon, Left, Body, Title } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'


export class HeaderSaturnSearch extends Component {
    render() {
        return (
            


                <Header
                    androidStatusBarColor='gold'
                    style={{ backgroundColor: 'white' }}
                    searchBar
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Icon name="arrow-back" />
                    </View>


                    <Item style={{
                        backgroundColor: '#D2D2D2',
                        borderRadius: 10,
                        marginHorizontal:10,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <Icon name="search" />
                        <Input placeholder="Search in Categories" />
                    </Item>



                </Header>
            
        )
    }
}

export default HeaderSaturnSearch
