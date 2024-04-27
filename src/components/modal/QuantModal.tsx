import { Modal, View, Text, Pressable } from "react-native";

export type QuantModalProps = {
    isOpen: boolean,
    modalCloseCallback: (...args:any)=>any,

}

export const QuantModal = ({isOpen, modalCloseCallback}:QuantModalProps)=>{
    return(<Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={modalCloseCallback}>
        <View style={{
    width:'50%',
    height:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor:'red'
  }}>
          <View style={{backgroundColor:'white', width:'100%'}}>
            <Text >Hello World!</Text>
            
          </View>
        </View>
      </Modal>)
}
