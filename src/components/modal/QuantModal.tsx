import React, {useState} from 'react';
import {Modal, View, Text, Pressable, TextInput, Button, Alert} from 'react-native';
import {modalStyles as ms} from './styles';
import {ItemDetails} from '../item-card/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {capitalize} from '../../utils/formatUtils';
import {RadioButton} from 'react-native-paper';
import { RECEIVED_FULL_TEXT, RECEIVE_QTY_BUTTON_TEXT } from '../../assets/svgs/constants/constants';

export type QuantModalProps = {
  isOpen: boolean;
  modalCloseCallback: (...args: any) => any;
  itemDetails: ItemDetails;
  onSubmit: (itemDetails: ItemDetails, enteredQty: string) => any
};

export const QuantModal = ({
  isOpen,
  modalCloseCallback,
  itemDetails,
  onSubmit
}: QuantModalProps) => {
  const [checked, setChecked] = useState(false);
  const [enteredQty, setEnteredQty] = useState('');
  const isDisabled = ()=>{
    return !checked && enteredQty==''
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={modalCloseCallback}>
      <View style={ms.modal}>
        <Pressable onPress={modalCloseCallback} style={ms.closeIcon}>
          <Ionicons name="close-sharp" color={'#000'} size={32} />
        </Pressable>
        <View>
          <Text style={ms.title} numberOfLines={1} ellipsizeMode="tail">
            {itemDetails.name}
          </Text>
          <Text style={ms.brandName}>{itemDetails.brand}</Text>
        </View>
        <View style={ms.quantDirCntr}>
          <Text style={ms.directiveText}>Received Quantity</Text>
          <View style={ms.quantEntryCntr}>
            <TextInput
              placeholder="0"
              style={ms.textEntry}
              autoFocus={!checked}
              keyboardType="numeric"
              editable={!checked}
              onChangeText={setEnteredQty}
              value={checked?itemDetails.quantity.toString():enteredQty.toString()}
            />
            <Text style={ms.expectedQuantity}>/ {itemDetails.quantity}</Text>
            <Text style={ms.uom}>{capitalize(itemDetails.uom)}</Text>
          </View>
          <View style={ms.checkBoxCntr}>
            <RadioButton
              value="first"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(prev => !prev)}
            />
            <Text style={ms.radioLabel}>{RECEIVED_FULL_TEXT}</Text>
          </View>
        </View>
        <View style={ms.submitButtonCntr}>

        <Pressable disabled={isDisabled()} onPress={()=>{
          
            onSubmit(itemDetails, checked?itemDetails.quantity.toString():enteredQty)
          
         
          
        }}>
          <View style={{...ms.submitButton, backgroundColor:isDisabled()?'#313631':`#06b000`}}>
            <Text style={ms.buttonText}>{RECEIVE_QTY_BUTTON_TEXT}</Text>
          </View>
        </Pressable>
        </View>
      </View>
    </Modal>
  );
};
