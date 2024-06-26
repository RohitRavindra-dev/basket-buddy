import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {itemCardStyles as ics} from './styles';
import {capitalize} from '../../utils/formatUtils';
import { ItemCardProps } from './types';
export const ItemCard = ({itemDetails, index, onClickRcvHandler}: ItemCardProps) => {
  const {name, brand, quantity, uom} = itemDetails
  return (
    <View style={ics.card}>
      <View style={ics.detailsCntr}>
        <View style={ics.nameBrandCntr}>
          <Text style={ics.itemName}>{name}</Text>
          <Text style={ics.brandName}>Brand: {brand}</Text>
        </View>
        <View style={ics.quantUomCntr}>
          <Text style={ics.quantity}>{quantity}</Text>
          <Text style={ics.uom}>{capitalize(uom)}</Text>
        </View>
      </View>
      <View style={ics.actionsCntr}>
        <TouchableOpacity style={ics.adjustQuantButton} onPress={()=>onClickRcvHandler(index)}>
          <Text style={ics.receiveText}>Receive</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
