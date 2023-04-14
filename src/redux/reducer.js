import { ADD_FAV, REMOVE_FAV } from "./actions-types";
const initialState = {
    myFavorite: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorite: [...state.myFavorite, payload]
            }    
        case REMOVE_FAV:
            return {
                ...state,
                myFavorite: state.myFavorite.filter( fav => fav.id !== payload)
            }
        default: return {...state}
    }
}

export default reducer;