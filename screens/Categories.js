import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Header, Left, Icon, Body, Title, List, ListItem, Subtitle, Right, H1, Picker } from 'native-base'
import NavigationBar from '../components/NavigationBar';
import HeaderSaturn from '../components/HeaderSaturn'

export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
            data: [
                {
                    label: "Zekiye Gedik",
                    value: 'key0'
                },
                {
                    label: "Annem",
                    value: 'key1'
                },
                {
                    label: "Babam",
                    value: 'key2'
                },
                {
                    label: 'yunus',
                    value: 'key3'
                }


            ]

        };
    }
    onValueChange(value) {

        this.setState({
            selected: value
        });
    }


    render() {
        return (

            <View>


                <StatusBar backgroundColor='gold' />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 16 }}>
                    <TouchableOpacity style={{ width: '90%', backgroundColor: '#F0F0F2' }}>
                        <Picker
                            mode='dropdown'
                            iosIcon={<Icon name="chevron-down" style={{ fontSize: 40 }} />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >

                            {this.state.data.map(item =>
                                <Picker.Item label={item.label} value={item.value} />
                            )}
                        </Picker>

                    </TouchableOpacity>

                </View>
                <View style={saturn.cardContainer}>
                    <View style={saturn.cardOne}>
                        <Image
                            source={require('../src/images/clothes.png')} />
                        <Text style={saturn.textStyle}>Clothes Recommend</Text>
                    </View>
                </View>
                <View style={saturn.cardContainerTwo}>

                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/dress_ilst.png')} style={{ width: '60%', height: 120 }} />
                        <Text style={saturn.textStyle}>Dress</Text>
                    </View>
                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/jeans.png')} style={{ width: '100%', height: 120 }} />
                        <Text style={saturn.textStyle}>Jeans</Text>
                    </View>
                </View>
                <View style={saturn.cardContainerTwo}>

                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/blouse_ilst.png')} style={{ width: '100%', height: 120 }} />
                        <Text style={saturn.textStyle}>Blouse</Text>
                    </View>
                    <View style={saturn.cardTwo}>
                        <Image
                            source={require('../src/images/shirt_ilst.png')} style={{ width: '100%', height: 120 }} />
                        <Text style={saturn.textStyle}>Shirt</Text>
                    </View>
                </View>

                <NavigationBar />

            </View>



        )
    }
}

const saturn = StyleSheet.create({

    cardContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',


    },
    cardContainerTwo: {

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 10


    },

    cardOne: {
        flexDirection: 'column',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        paddingVertical: 16,
        borderRadius: 10
    },

    cardTwo: {
        width: '43%',
        height: null,
        backgroundColor: 'gold',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',



    },

    textStyle: {

        color: 'white',
        fontWeight: 'bold'
    }

})

export default Categories
