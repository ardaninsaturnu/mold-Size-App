import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'
import { Header, Left, Icon, Body, Title, List, ListItem, Subtitle, Right, H1 } from 'native-base'


export class UnderBody extends Component {
    render() {
        return (
            <View style={{marginHorizontal:24,marginTop:5}}>
                
                <Text style={{fontSize:25}}>Under Body</Text>
                
                <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >leg length:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >inside leg:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >out leg:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Basen:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Baldir Kalinligi:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
            </View>
        )
    }
}

const saturn = StyleSheet.create({

    listStyle : {
        paddingVertical:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        
    }

})
export default UnderBody
