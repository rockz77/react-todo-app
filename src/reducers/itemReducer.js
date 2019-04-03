import { FETCH_ITEMS, NEW_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  deletedItem: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_ITEMS:
        return {
          ...state,
          items: action.payload
        };
      case NEW_ITEM:
        return {
          ...state,
          item: action.payload
        };
      case DELETE_ITEM:
        return {
          ...state,
          deletedItem: { deletedItemID: action.payload }
        };
      default:
        return state;
  }
}
