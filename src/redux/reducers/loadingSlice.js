import { createSlice } from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState: { value: false },
  reducers: {
    setIsLoading: (state) => {
      state.value = !state.value
    },
  },
})

export const { setIsLoading } = loadingSlice.actions
export default loadingSlice.reducer
