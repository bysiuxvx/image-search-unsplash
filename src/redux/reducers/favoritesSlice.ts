import {createSlice} from "@reduxjs/toolkit"

import {ImageData} from "../../types/interface";

const initialState = JSON.parse(localStorage.getItem("favorites") || "[]")

export const favoritesSlice = createSlice({
    name: "favoritesList",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            if (state.includes(action.payload)) return
            else return [...state, action.payload]
        },
        removeFromFavorites: (state, action) => {
            return state.filter(({id}: ImageData) => id !== action.payload)
        },
    },
})

export const {addToFavorites, removeFromFavorites,} = favoritesSlice.actions
export default favoritesSlice.reducer
