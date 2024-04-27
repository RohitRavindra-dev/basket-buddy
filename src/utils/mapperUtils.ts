import {ItemDetails} from '../components/item-card/types';

export const getTotalWeight = (items: Array<ItemDetails>) => {
  let totalWeight = 0;
  items.forEach(item => {
    if (item.uom == 'kgs') {
      totalWeight += item.quantity;
    }
  });
  return totalWeight;
};
