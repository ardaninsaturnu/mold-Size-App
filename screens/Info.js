import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Left, Icon, Body, Title, List, ListItem, Subtitle, Right } from 'native-base'
import HeaderSaturn from '../components/HeaderSaturn'

export class Info extends Component {
    render() {
        return (
            <View>
                <HeaderSaturn title='User Informations'/>
                <List>
                    <ListItem>
                        <View>
                            <Icon name='person' style={{fontSize:25}}/>
                        </View>
                        <Body style={{marginLeft:0}}>
                            <Title style={{color:'black'}}> Name / Lastname: </Title>
                            <Subtitle style={{color:'black'}}>Zekiye Gedik</Subtitle>
                        </Body>
                        <Right>
                            <Icon name='ios-create' style={{color:'gold', fontSize:25 }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <View>
                            <Icon name='mail-open' style={{fontSize:25}}/>
                        </View>
                        <Body style={{marginLeft:0}}>
                            <Title style={{color:'black'}}> E-Mail : </Title>
                            <Subtitle style={{color:'black'}}>zekiyegdk@gmail.com</Subtitle>
                        </Body>
                        <Right>
                            <Icon name='ios-create' style={{color:'gold', fontSize:25 }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <View>
                            <Icon name='call' style={{fontSize:25}}/>
                        </View>
                        <Body style={{marginLeft:0}}>
                            <Title style={{color:'black'}}> Mobile Phone : </Title>
                            <Subtitle style={{color:'black'}}>+905323333333</Subtitle>
                        </Body>
                        <Right>
                            <Icon name='ios-create' style={{color:'gold', fontSize:25 }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <View>
                            <Icon name='calendar' style={{fontSize:25}}/>
                        </View>
                        <Body style={{marginLeft:0}}>
                            <Title style={{color:'black'}}> Birth Date : </Title>
                            <Subtitle style={{color:'black'}}>12/12/1992</Subtitle>
                        </Body>
                        <Right>
                            <Icon name='ios-create' style={{color:'gold', fontSize:25 }}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <View>
                            <Icon name='transgender' style={{fontSize:25}}/>
                        </View>
                        <Body style={{marginLeft:0}}>
                            <Title style={{color:'black'}}>Gender :</Title>
                            <Subtitle style={{color:'black'}}>Women</Subtitle>
                        </Body>
                        <Right>
                            <Icon name='ios-create' style={{color:'gold', fontSize:25 }}/>
                        </Right>
                    </ListItem>
                </List>
            </View>

        )
    }
}

export default Info
