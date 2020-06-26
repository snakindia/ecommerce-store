const initialState = {
    menuData: {},
    isFetching: false,
    isError: false,
    subMenuData :{}
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MENU":
        return Object.assign({}, state, {
          isFetching: true,
          menuData: {},
          isError: false
        });
      case "FETCHED_MENU":
        return Object.assign({}, state, {
          menuData: action.data,
          isFetching: false,
          isError: false
        });
      case "FETCH_SUB_MENU":
        return Object.assign({}, state, {
            isFetching: true,
            menuData: {},
            isError: false
          });
      case "FETCHED_SUB_MENU":
        return Object.assign({}, state, {
            subMenuData: action.data,
            isFetching: false,
            isError: false
          });  
      case "RECEIVE_ERROR":
        return Object.assign({}, state, {
          isError: true,
          isFetching: false
        });
      default:
        return state;
    }
  };
  
  export default asyncReducer;