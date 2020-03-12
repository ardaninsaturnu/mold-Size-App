import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Header, Left, Icon, Body, Title, List, ListItem, Subtitle, Right, H1 } from 'native-base'

export class UpperBody extends Component {
    render() {
        return (
            <View style={{marginHorizontal:24, marginTop:10}}>

                    <Text style={{fontSize:25}}>Upper Body</Text>

                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
                        <TextInput 
                        backgroundColor='gold'
                        placeholder='26'
                        style={{width:50,textAlign:'center',borderRadius:10}}
                        />
                    </View>
                    <View style={saturn.listStyle}>
                        <Text 
                        style={{fontSize:20}}
                        >Boyun:</Text>
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
        paddingVertical:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        
    }

})

export default UpperBody
