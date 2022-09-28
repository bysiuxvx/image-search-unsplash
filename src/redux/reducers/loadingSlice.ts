import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export const loadingSlice = createSlice({
    name: "isLoading",
    initialState: false,
    reducers: {
        setIsLoading: (state: boolean, action: PayloadAction<boolean>) => {
            return action.payload
        },
    },
})

export const {setIsLoading} = loadingSlice.actions
export default loadingSlice.reducer
