import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ImageData} from "../../types/interface";

const initialState: ImageData[] = []

export const imageListSlice = createSlice({
    name: "imageList",
    initialState,
    reducers: {
        setImageList: (state, action: PayloadAction<ImageData[]>) => {
            return action.payload
        },
        clearImageList: (state) => {
            return []
        },
    },
})

export const {setImageList, clearImageList} = imageListSlice.actions
export default imageListSlice.reducer
