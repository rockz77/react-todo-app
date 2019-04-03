import * as actionType from './types';

export const fetchItems = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: actionType.FETCH_ITEMS,
        payload: items
      })
    );
};

export const createItem = itemData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(itemData)
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: actionType.NEW_ITEM,
        payload: item
      })
    );
};

export const deleteItem = itemID => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${itemID}`, {
    method: 'DELETE'
  })
    .then(() => { return (
          dispatch({
            type: actionType.DELETE_ITEM,
            payload: itemID
          })
        )
      }
    );
};
