import React from 'react';
import {Text, View} from 'react-native';
import {itemCardStyles as ics} from './styles';
import {ItemCardProps} from './types';
export const ItemCard = ({name, brand, quantity, uom}: ItemCardProps) => {
  return (
    <View style={ics.card}>
      <View style={ics.detailsCntr}>
        <View style={ics.nameBrandCntr}>
          <Text style={ics.itemName}>{name}</Text>
          <Text style={ics.brandName}>Brand: {brand}</Text>
        </View>
        <View>
          <Text style={ics.quantity}>{quantity}</Text>
          <Text style={ics.uom}>{uom}</Text>
        </View>
      </View>
      <View style={ics.actionsCntr}>
        <View>
          <Text>Completed!</Text>
        </View>
        <View>
          <Text>Edit</Text>
        </View>
      </View>
    </View>
  );
};
