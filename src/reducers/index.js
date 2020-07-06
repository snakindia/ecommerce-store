const initialState = {
    menuData: {},
    isFetching: false,
    isError: false,
    subMenuData :{},
    abousUsDetails: {},
    freeBrochuresUserDetail: {}
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
        
        case "FETCHED_ABOUT_US_PAGE_DETAILS":
            return Object.assign({}, state, {
                abousUsDetails: action.data,
            });
            
        case "SAVE_FREE_BROCHURES_USER":
            return Object.assign({}, state, {
                freeBrochuresUserDetail: action.data,
            });
        
      default:
        return state;
    }
  };
  
  export default asyncReducer;