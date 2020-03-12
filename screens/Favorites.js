import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderSaturn from '../components/HeaderSaturn'

export class Favorites extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn title='Favorites' />
                <View style={saturn.cardContainerTwo}>
                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/model1.png')}
                            style={{ resizeMode: 'center', width: 100 }}
                        />
                    </View>
                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/model1.png')}
                            style={{ resizeMode: 'center', width: 100 }}
                        />
                    </View>
                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/model1.png')}
                            style={{ resizeMode: 'center', width: 100 }}
                        />
                    </View>
                </View>

            </View>
        )
    }
}

const saturn = StyleSheet.create({

    cardContainerTwo: {
        flexWrap: 'wrap',
        flexDirection: 'row',

        marginHorizontal: 5,

        paddingHorizontal: 12,
        justifyContent: 'flex-start'




    },



    cardTwo: {
        width: 170,
        height: 170,

        borderRadius: 10,
        borderColor: 'gold',
        borderWidth: 2,
        marginLeft: 12,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',



    },

    textStyle: {

        color: 'white',
        fontWeight: 'bold'
    }

})

export default Favorites
