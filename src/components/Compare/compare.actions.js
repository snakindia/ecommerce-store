const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE';
export { ADD_TO_COMPARE, REMOVE_FROM_COMPARE };

const addToCompare = comparedData => (dispatch, getState) => {
  const data = getState().compare.comparedDeals || [];
  let existed_item = data.find(item => item.id === comparedData.id);
  if (data.length < 3) {
    if (existed_item) {
      dispatch({
        type: `${ADD_TO_COMPARE}_ERROR`,
        error: 'This item is already added',
      });
    } else {
      dispatch({ type: ADD_TO_COMPARE, payload: comparedData, error: '' });
    }
  } else {
    dispatch({
      type: `${ADD_TO_COMPARE}_ERROR`,
      error: 'Cannot add more than 3 items',
    });
  }
};

const removeFromCompare = id => (dispatch, getState) => {
  const data = getState().compare.comparedDeals || [];
  let new_items = data.filter(item => item.id !== id);
  dispatch({ type: REMOVE_FROM_COMPARE, payload: new_items, error: '' });
};
export { addToCompare, removeFromCompare };
