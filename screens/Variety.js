import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderSaturnSearch from '../components/HeaderSaturnSearch'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

export class Variety extends Component {
    render() {
        return (
            <ScrollView>
                <HeaderSaturnSearch />
                <Text style={saturn.titlestyle}>T-Shirts</Text>
                <View style={saturn.boxContainer}>

                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 1 </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 4 </Text>
                    </TouchableOpacity>

                </View>
                <Text style={saturn.titlestyle}>Shirts</Text>

                <View style={saturn.boxContainer}>
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 1 </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.boxProduct}>
                        <Text>Product 4 </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const saturn = StyleSheet.create({

    titlestyle :{
        fontSize:25,
        marginTop:15,
        marginLeft:16
    },
    
    boxContainer :{
        flexDirection:'row',
        flexWrap:'wrap',
        marginHorizontal:20
    },
    
    boxProduct : {
        width:170,
        height:170,
        backgroundColor:'red',
        marginLeft:10,
        marginVertical:15,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gold',
    }

})


export default Variety
