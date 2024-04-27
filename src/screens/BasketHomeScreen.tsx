import React, {useState} from 'react';
import {
  Alert,
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
import { Spacer } from '../components/commons/spacer/Spacer';
import { ItemDetails } from '../components/item-card/types';

export const BasketHomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [curAdjItem, setCurAdjItem] = useState<ItemDetails|null>(null);

  const onClickRcvItem = (index: number) => {
    setCurAdjItem(itemsListDummy[index])
    setIsModalOpen(true);
  };

  const handleAdjModalClose = ()=>{
    setCurAdjItem(null);
    setIsModalOpen(false)
  }

  const onReceiveRequest = (itemDetails: ItemDetails, receivedQty: string)=>{
    Alert.alert("Received Item!",`Received : ${receivedQty} of item: ${itemDetails.name}`)
    handleAdjModalClose()
  }

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
                <ItemCard itemDetails={item} onClickRcvHandler={onClickRcvItem} index={index} />
              </View>
            );
          }}
        />
      </View>
     {curAdjItem && <QuantModal
        isOpen={isModalOpen}
        itemDetails={curAdjItem}
        modalCloseCallback={handleAdjModalClose}
        onSubmit={onReceiveRequest}
      />}
    </View>
  );
};
