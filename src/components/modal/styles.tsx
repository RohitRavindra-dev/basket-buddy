import {StyleSheet} from 'react-native';

export const modalStyles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    position: 'absolute',
    top: '20%',
    left: '10%',
    height: '50%',
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
    paddingTop: 24
  },
  directiveText:{
    fontSize: 18,
    fontWeight:'500',
    color:'#555'
  },
  quantEntryCntr:{
    flexDirection:'row',
    justifyContent:'flex-start',
    width:'100%',
    alignItems:'center',
    paddingVertical: 8,
  },
  textEntry:{
    borderColor:'#aaa',
    borderWidth: 1,
    fontSize: 21,
    borderRadius: 4,
    width:'30%'
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
  }
});
