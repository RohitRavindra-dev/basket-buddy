import { Modal, View, Text, Pressable } from "react-native";
import { modalStyles as ms } from "./styles";
import { ItemCardProps } from "../item-card/types";
export type QuantModalProps = {
    isOpen: boolean,
    modalCloseCallback: (...args:any)=>any,
    itemDetails?: ItemCardProps
}

export const QuantModal = ({isOpen, modalCloseCallback}:QuantModalProps)=>{
    return(<Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={modalCloseCallback}>
        <View style={ms.modal}>
            <Pressable onPress={modalCloseCallback}>

                <Text>Close modal</Text>
            </Pressable>
        </View>
      </Modal>)
}
