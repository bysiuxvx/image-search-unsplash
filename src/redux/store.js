import { configureStore } from "@reduxjs/toolkit"
import imageListReducer from "./reducers/imageListSlice"
import loadingReducer from "./reducers/loadingSlice"
import favoritesReducer from "./reducers/favoritesSlice"

const store = configureStore({
  reducer: {
    imageList: imageListReducer,
    isLoading: loadingReducer,
    favoriteList: favoritesReducer,
  },
})

export default store
