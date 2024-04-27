import {StyleSheet} from 'react-native';

export const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    position: 'absolute',
    top: '20%',
    left: '10%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#666',
    elevation: 1,
    width: '80%',
  },
  closeIcon: {
    position:'absolute',
    top: 8,
    right: 8
  },
  title:{
    fontSize: 32,
    fontWeight: '600',
    color: '#111',
    width:'90%',
    paddingTop: 8
  },
  brandName:{
    fontSize: 18,
    color: '#666'
  },
  quantDirCntr:{
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor:'#f8fff7'
  },
  directiveText:{
    fontSize: 18,
    fontWeight:'500',
    color:'#444'
  },
  quantEntryCntr:{
    flexDirection:'row',
    justifyContent:'flex-start',
    width:'100%',
    alignItems:'flex-end',
    paddingVertical: 6,
  },
  textEntry:{
    borderColor:'#aaa',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 4,
    width:'30%',
    textAlignVertical:'bottom',
    color:'#000',
    fontWeight: '600',
    paddingVertical: 0,
    paddingTop: 4,
    backgroundColor:'#fff'
  },
  expectedQuantity:{
    fontSize: 28,
    fontWeight: '500',
    color:'#333',
    paddingLeft: 4
  },
  uom:{
    fontSize: 20,
    color: '#666',
    paddingLeft: 3
  },
  checkBoxCntr: {
    paddingTop: 6,
    flexDirection:'row',
    alignItems:'center'
  },
  radioLabel:{
    fontSize: 14,
    color:'#333',

  },
  submitButtonCntr:{
    paddingTop: 16
  },
  submitButton:{
    backgroundColor:'#06b000',
    width:'100%',
    padding: 12,
    borderRadius: 8,
    alignItems:'center'
  },
  buttonText:{
    fontSize: 24,
    color:'#000d00',
    fontWeight:'700'
  }
});
