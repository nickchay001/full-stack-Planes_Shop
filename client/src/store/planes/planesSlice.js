import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import planesService from '../services/planesServices'

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
    try {
        return await planesService.getPlanes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
export const createPlane = createAsyncThunk('CREATE_PLANE', async (planeData, thunkAPI) => {
    try {
        return await planesService.createPlane(planeData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const planesSlice = createSlice({
    name: 'planes',
    initialState: {
        planes: null,
        isError: false,
        isLoading: false,
        message: '',
        errors: null
    },
    reducers: {
        resetPlaneErrors: (state) => {
            state.errors = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPlanes.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getPlanes.fulfilled, (state, action) => {
            state.isLoading = false
            state.planes = action.payload
        });
        builder.addCase(getPlanes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.planes = null
        });
        builder.addCase(createPlane.pending, (state) => {
            state.isLoading = true;
            state.errors = null
        });
        builder.addCase(createPlane.fulfilled, (state) => {
            state.isLoading = false
            state.errors = null
        });
        builder.addCase(createPlane.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        });
    }
})

export const { resetPlaneErrors } = planesSlice.actions

export default planesSlice.reducer