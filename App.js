import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import { Welcome } from './screens/Welcome'
import { Account } from './screens/Account'
import { AdressEdit } from './screens/AdressEdit'
import { AdressInfo } from './screens/AdressInfo'
import { Categories } from './screens/Categories'
import { ChangePassword } from './screens/ChangePassword'
import { Favorites } from './screens/Favorites'
import { ForgetPassword } from './screens/ForgetPassword'
import { Info } from './screens/Info'
import { PasswordMail } from './screens/PasswordMail'
import { Recommend } from './screens/Recommend'
import { SizeTables } from './screens/SizeTables'
import { Variety } from './screens/Variety'





const Stack = createStackNavigator();



export class App extends Component {
  render() {
    return (

      <NavigationContainer>

        <Stack.Navigator initialRouteName="account">

          <Stack.Screen
            name="welcome"
            component={Welcome}
         />

          <Stack.Screen
            name="account"
            component={Account}
         />

          <Stack.Screen
            name="adresedit"
            component={AdressEdit}
          />

          <Stack.Screen
            name="adressinfo"
            component={AdressInfo}
            />

          <Stack.Screen
            name="categories"
            component={Categories}
         />

          <Stack.Screen
            name="changepassword"
            component={ChangePassword}
         />

          <Stack.Screen
            name="favorites"
            component={Favorites}
            />

          <Stack.Screen
            name="forgetpassword"
            component={ForgetPassword}
         />

          <Stack.Screen
            name="info"
            component={Info}
           />

          <Stack.Screen
            name="passwordmail"
            component={PasswordMail}
           />

          <Stack.Screen
            name="recommend"
            component={Recommend}
          />

          <Stack.Screen
            name="sizetables"
            component={SizeTables}
             />

          <Stack.Screen
            name="variety"
            component={Variety}
         />

    


        </Stack.Navigator>

      </NavigationContainer>



    )
  }
}


export default App
