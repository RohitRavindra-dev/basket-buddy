import React, { useState } from 'react';
import {FlatList, Text, TouchableWithoutFeedback, View} from 'react-native';
import {AppHeader} from '../components/commons/header/Header';
import {ItemCard} from '../components/item-card/ItemCard';
import {itemsListDummy} from '../assets/data_dummy/itemsData';
import { QuantModal } from '../components/modal/QuantModal';

export const BasketHomeScreen = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const adjustItem = ()=>{
        setIsModalOpen(true);
    }
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#f8f8f8'}}>
      <AppHeader headerTitle="Basket" />

    <TouchableWithoutFeedback onPress={()=>setIsModalOpen(false)} style={{width:'100%',height:'100%'}}>
      <FlatList
        data={itemsListDummy}
        ItemSeparatorComponent={()=><View style={{height: 20, width:'100%'}}></View>}
        renderItem={({item, index}) => {
          return (
            <View style={{paddingHorizontal: 10}}>
              <ItemCard {...item} adjustmentHandler={adjustItem}/>
            </View>
          );
        }}
      />
    </TouchableWithoutFeedback> 
      <QuantModal isOpen={isModalOpen} modalCloseCallback={()=>setIsModalOpen(false)} />
    </View>
  );
};
