import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AppHeader} from '../components/commons/header/Header';
import {ItemCard} from '../components/item-card/ItemCard';
import {itemsListDummy} from '../assets/data_dummy/itemsData';
import {QuantModal} from '../components/modal/QuantModal';
import { Spacer } from '../components/commons/spacer/spacer';

export const BasketHomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const adjustItem = () => {
    setIsModalOpen(true);
  };
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#f8f8f8'}}>
      <AppHeader headerTitle="Basket" />

      <View style={{height:'100%'}}>
        {isModalOpen && (
          <View
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              backgroundColor: '#000',
              opacity: 0.5,
              zIndex: 100,
            }}></View>
        )}
        <FlatList
          data={itemsListDummy}
          ItemSeparatorComponent={() => (
            <View style={{height: 20, width: '100%'}}></View>
          )}
          ListFooterComponent={()=><Spacer height={100} color={'#f8f8f8'} />}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{paddingHorizontal: 10}}>
                <ItemCard {...item} adjustmentHandler={adjustItem} />
              </View>
            );
          }}
        />
      </View>
      <QuantModal
        isOpen={isModalOpen}
        modalCloseCallback={() => setIsModalOpen(false)}
      />
    </View>
  );
};
