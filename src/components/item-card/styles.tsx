import {StyleSheet} from 'react-native';

export const itemCardStyles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    padding: 14,
    flexDirection: 'row',
  },
  detailsCntr: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameBrandCntr: {
    width: '70%',
  },
  itemName: {
    fontSize: 30,
    color: '#000',
    fontWeight: '500',
  },
  brandName: {
    fontSize: 20,
    color: '#333',
  },
  quantUomCntr: {
    alignItems: 'flex-end',
    paddingRight: '10%',
  },
  quantity: {
    fontSize: 32,
    color: '#0037ad',
    fontWeight: '600',
  },
  uom: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  actionsCntr: {
    width: '20%',
    justifyContent: 'center',
  },
  adjustQuantButton:{
    borderWidth: 1.25,
    borderRadius: 16,
    backgroundColor:'#d4ffc2',
    paddingVertical: 18,
    paddingHorizontal: 4,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    elevation: 2
  },
  receiveText:{
    fontSize: 17,
    fontWeight: '700',
    color:'#0e2e00'
  }
});
