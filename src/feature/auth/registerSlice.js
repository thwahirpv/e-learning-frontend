import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAPI } from "../../utils/api";
import { EMAIL, NETWORK } from "../../constants/constants";

const registerThunk = createAsyncThunk(
    "auth/register",
    async (FormData, {rejectWithValue}) => {
        try {
            const response = await baseAPI.post('/auth/register/', FormData)
            console.log(response)
            return {
                'message': response.data.message || 'Successfully registered',
                'email': response.data.email
            }
        } catch(error) {
            console.log(error, 'from slice')
            const message = error?.response?.data?.email[0] && {'error_mark': EMAIL, 'message': error?.response?.data?.email[0]}
            || error?.message && {'error_mark': NETWORK, 'message': `${error?.message}, check your network`}
            || {'error_mark': NETWORK, 'message': 'Registraion failed!, check your network'}
            return rejectWithValue(message)
        }
    }
)

const registrationSlice = createSlice({
    name: 'register',
    initialState:{
        isRegisterLoading: false,
        RegisterError: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerThunk.pending, (state, action) => {
            state.isRegisterLoading = true
            state.RegisterError = null
        })
        .addCase(registerThunk.fulfilled, (state, actoin) => {
            state.isRegisterLoading = false
            state.RegisterError = null
        })
        .addCase(registerThunk.rejected, (state, action) => {
            state.isRegisterLoading = false
            state.RegisterError = action.payload
        })
    }
})

export default registrationSlice.reducer
export { registerThunk } 