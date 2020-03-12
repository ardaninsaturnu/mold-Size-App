import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon, Row } from 'native-base'

export class AdressBox extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'gold', width: '90%', marginHorizontal: 20, marginVertical: 16, paddingVertical: 10,borderRadius:15 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <Icon name='ios-pin' />
                        <Text style={{ fontSize: 25,marginHorizontal:10 }}>{this.props.place}</Text>
                    </View>
                    <Icon name="ios-create" />
                </View>
                <View style={{marginHorizontal:20,marginVertical:20}}>
                <Text style={saturn.textStyle}>{this.props.street}</Text>
                <Text style={saturn.textStyle}>{this.props.no}</Text>
                <Text style={saturn.textStyle}>{this.props.city}</Text>
                </View>
            </View>
        )
    }

}

const saturn = StyleSheet.create({
   textStyle :{
    fontSize:15,
    color:'white',
    fontWeight:'bold'
   }
})

export default AdressBox
