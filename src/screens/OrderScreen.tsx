import React from 'react'
import { Text, View } from 'react-native'
import { AppHeader } from '../components/commons/header/Header'

export const OrderScreen = ()=>{
    return(
        <View style={{"height":'100%', width: '100%'}}>
            <AppHeader headerTitle='Order' />
            <Text>Hello demo screen</Text>
        </View>
    )
}