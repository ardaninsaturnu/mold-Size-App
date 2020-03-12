import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import HeaderSaturn from '../components/HeaderSaturn'
import NeptunInput from '../components/NeptunInput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderSaturnSearch from '../components/HeaderSaturnSearch'
import { Textarea } from 'native-base'

export class AdressEdit extends Component {
    render() {
        return (
            <ScrollView>
                <HeaderSaturn title='Adress Add/Edit' />
                <View>
                    <Text style={{marginTop:40,marginLeft:20,fontSize:20}}>Adress Title</Text>
                    <NeptunInput
                        placeholder='example : Home'
                    />
                    <Text style={{marginTop:40,marginLeft:20,fontSize:20}}>Adress Title</Text>
                    <NeptunInput
                        placeholder='example : Home'
                    />
                    <NeptunInput />

                    <Text style={{marginTop:40,marginLeft:20,fontSize:20}}>Adress Info :</Text>
                    <View style={saturn.buttoncontainer}>
                        <TouchableOpacity style={saturn.buttonstyle}>
                            <Text>City</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={saturn.buttonstyle}>
                            <Text>State</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={saturn.buttonstyle}>
                            <Text>Country</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <Textarea 
                    rowSpan={5} bordered 
                    style={{marginHorizontal:20}} />
                    <View style={saturn.buttoncontainer}>
                        <TouchableOpacity style={saturn.buttonstyle}>
                            <Text>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={saturn.buttonstyle}>
                            <Text>Delete Adress</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const saturn = StyleSheet.create ({

    buttoncontainer : {
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical: 10
    },
    buttonstyle :{
        backgroundColor:'gold',
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10
    }
    

})

export default AdressEdit