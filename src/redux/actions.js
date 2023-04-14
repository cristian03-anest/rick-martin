import { ADD_FAV, REMOVE_FAV } from "./actions-types"

export const addFav =  (data) => {
    return {type:ADD_FAV, payload: data}
}

export const removeFav = (id) => {
    return {type:REMOVE_FAV, payload: id}
}