import { createSlice } from "@reduxjs/toolkit"

export const imageListSlice = createSlice({
  name: "imageList",
  initialState: { images: [], web: [] },
  reducers: {
    setImageList: (state, action) => {
      state.images = action.payload
    },
    clearImageList: (state) => {
      state.images = []
    },
  },
})

export const { setImageList, clearImageList } = imageListSlice.actions
export default imageListSlice.reducer
