import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'fdsfsd',
    name: 'Sanssy',
    reference: '4321',
    deliveryDate: '2018-07-28T22:00:00.000Z',
    state: State.ALIVRER
  },
  {
    id: 'kjghkiu',
    name: 'Yuzhu',
    reference: '1591',
    deliveryDate: '2018-07-29T22:00:00.000Z',
    state: State.ENCOURS
  },
  {
    id: 'tyuifds',
    name: 'Dominik',
    reference: '2651',
    deliveryDate: '2018-07-30T14:32:13.291Z',
    state: State.LIVREE
  }
];
