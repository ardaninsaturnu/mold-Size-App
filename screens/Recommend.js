import React, { Component } from 'react'
import { Text, View,StyleSheet,Image} from 'react-native'
import { Header,Left,Icon,Body,Title } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderSaturn from '../components/HeaderSaturn'
import NavigationBar from '../components/NavigationBar'

export class Recommend extends Component {
    render() {
        return (


            <View>

                <HeaderSaturn title='Recommend'/>
                
                <View style={saturn.recCont}>
                    <TouchableOpacity style={saturn.recBox}>
                        <Image
                        source={require('../src/images/model1.png')}
                        style={{width: 120, height:120, resizeMode:'center'}}
                        />
                    
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.recBox}>
                    <Image
                        source={require('../src/images/model2.png')}
                        style={{width: 120, height:120, resizeMode:'center'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={saturn.recBox}>
                    <Image
                        source={require('../src/images/model1.png')}
                        style={{width: 120, height:120, resizeMode:'center'}}
                        />
                    </TouchableOpacity>
                    
                </View>
                <NavigationBar/>

            </View>

        )
    }
}

const saturn = StyleSheet.create ({

    recCont :{
        
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal:15
        
    },
    
    recBox :{
        width:170,
        height:170,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'gold',
        borderWidth:2,
        borderRadius:5

        
    }

})

export default Recommend
