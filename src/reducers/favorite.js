const initialState={
    allFavorites:[],
};

export default (state = initialState, action ={}) =>{
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                allFavorites: action.favorites,
            };
        case 'DELETE_FAVORITE':
            return {
                ...state,
                allFavorites: action.favorites,
            };
        default:
            return state;
    }
};