import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderSaturn from '../components/HeaderSaturn'
import AdressBox from '../components/AdressBox'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'native-base'

export class AdressInfo extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn title='Adress Information'/>
                <AdressBox
                    place='Home'
                    street='X mahallesi x.sokak'
                    city='Abbasaga/Besiktas'
                    no='57 roof'
                />
                <AdressBox
                    place='Office'
                    street='X mahallesi x.sokak'
                    city='Abbasaga/Besiktas'
                    no='57 roof'
                />
                <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',marginVertical:12}}>
                    <Icon name='md-add-circle-outline' style={{fontSize:50}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AdressInfo
