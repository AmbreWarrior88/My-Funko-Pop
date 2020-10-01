const initialState={
    allFavorites:[],
};

const favorites = (state = initialState, action ={}) =>{
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

export default favorites;