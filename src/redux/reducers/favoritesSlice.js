import { createSlice } from "@reduxjs/toolkit"

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
      return state.filter(({ id }) => id !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites, hydrate } =
  favoritesSlice.actions
export default favoritesSlice.reducer
