import {StyleSheet} from 'react-native';

export const itemCardStyles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    padding: 14
  },
  detailsCntr: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
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
    flexDirection:'row',
    alignItems: 'baseline',
    paddingRight: '10%',
  },
  quantity: {
    fontSize: 36,
    color: '#1f0003',
    fontWeight: '600',
  },
  uom: {
    paddingLeft: 4,
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
  },
  actionsCntr: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: 12
  },
  adjustQuantButton:{
    borderWidth: 1.25,
    borderRadius: 12,
    backgroundColor:'#008720',
    paddingVertical: 8,
    paddingHorizontal: 4,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    elevation: 1
  },
  receiveText:{
    fontSize: 24,
    fontWeight: '600',
    color:'#f0fff3'
  }
});
