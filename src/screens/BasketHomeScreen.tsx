import React from 'react'
import { Text, View } from 'react-native'
import { AppHeader } from '../components/commons/header/Header'

export const BasketHomeScreen = ()=>{
    return (
        <View style={{width:'100%', height:'100%'}}>
            <AppHeader headerTitle='Basket' />
            <Text>Home page </Text>
        </View>
    )
}