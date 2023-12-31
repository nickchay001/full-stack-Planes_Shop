import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import planesService from '../services/planesServices'

export const getPlane = createAsyncThunk('GET_PLANE', async (id, thunkAPI) => {
    try {
        return await planesService.getPlane(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const planeSlice = createSlice({
    name: 'plane',
    initialState: {
        plane: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getPlane.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getPlane.fulfilled, (state, action) => {
            state.isLoading = false
            state.plane = action.payload[0]
        });
        builder.addCase(getPlane.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.plane = null
        });
    }
})

export default planeSlice.reducer