import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAPI } from "../../utils/api"


const googleAuthThunk = createAsyncThunk(
    "auth/google",
    async (data, {rejectWithValue}) => {
        try {
            const response = await baseAPI.post('/auth/google_auth/', data)
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error, 'from slice error')
            return rejectWithValue(error)
        }
    }
)


const googleAuthSlice = createSlice({
    name: 'googleAuth',
    initialState: {
        isGoogleAuthLoading: false,
        googleAuthError: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(googleAuthThunk.pending, (state, action) => {
            state.isGoogleAuthLoading = true
            state.googleAuthError = null
        })
        .addCase(googleAuthThunk.fulfilled, (state, action) => {
            state.isGoogleAuthLoading = false
            state.googleAuthError = null
        })
        .addCase(googleAuthThunk.rejected, (state, action) => {
            state.isGoogleAuthLoading = false
            state.googleAuthError = action.payload
        })
    }
})

export default googleAuthSlice.reducer
export { googleAuthThunk }