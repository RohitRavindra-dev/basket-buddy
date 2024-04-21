import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { AppHeader } from '../components/commons/header/Header'
import { ItemCard } from '../components/item-card/ItemCard'
import { itemsListDummy } from '../assets/data_dummy/itemsData'

export const BasketHomeScreen = ()=>{
    return (
        <View style={{width:'100%', height:'100%', backgroundColor:'#f8f8f8'}}>
            <AppHeader headerTitle='Basket' />
            
            <FlatList 
            data={itemsListDummy}
            renderItem={({item, index})=>{
                return (
                    <View style={{paddingHorizontal: 10, paddingBottom: 12}}>
                        <ItemCard {...item} />
                        </View>
                )
            }}
            />
        </View>
    )
}