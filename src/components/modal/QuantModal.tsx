import {Modal, View, Text, Pressable, TextInput} from 'react-native';
import {modalStyles as ms} from './styles';
import {ItemCardProps} from '../item-card/types';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type QuantModalProps = {
  isOpen: boolean;
  modalCloseCallback: (...args: any) => any;
  itemDetails?: ItemCardProps;
};

export const QuantModal = ({isOpen, modalCloseCallback}: QuantModalProps) => {
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
            Item Name goes in
          </Text>
          <Text style={ms.brandName}>Brand goes here</Text>
        </View>
        <View style={ms.quantDirCntr}>
          <Text style={ms.directiveText}>Received Quantity</Text>
          <View style={ms.quantEntryCntr}>
            <TextInput
              placeholder="0"
              style={ms.textEntry}
              autoFocus
              keyboardType="numeric"
            />
            <Text style={ms.expectedQuantity}>/ 3</Text>
            <Text style={ms.uom}>Kgs</Text>
          </View>
        </View>
        <View></View>
      </View>
    </Modal>
  );
};
