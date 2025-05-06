import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAPI } from "../../utils/api";
import { NETWORK, OTP } from "../../constants/constants";


const registerOTPThunk = createAsyncThunk(
    "auth/registerOtp",
    async (data, {rejectWithValue}) => {
        try {
            const response = await baseAPI.post('/auth/verify_otp/', data)
            return response.data.message || 'OTP verified successfully'
        } catch (error) {
            const message = error?.response?.data?.message && {'error_mark': OTP, 'message': error?.response?.data?.message}
            || error?.message && {'error_mark': NETWORK, 'message': `${error?.message}, check your network`} 
            || {'error_mark': NETWORK, 'message': 'Network issue, check your network'}
            return rejectWithValue(message)
        }
    }
)

const registerOtpSlice = createSlice({
    name: 'registerOtp',
    initialState: {
        isRegisterOtpLoading: false,
        registerOtpError: null,
        registerOtpMail: '',
    },
    reducers: {
        setOtpEmail: (state, action) => {
            state.registerOtpMail = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerOTPThunk.pending, (state, action) => {
            state.isRegisterOtpLoading = true
            state.registerOtpError = null
        })
        .addCase(registerOTPThunk.fulfilled, (state, action) => {
            state.isRegisterOtpLoading = false
            state.registerOtpError = null
        })
        .addCase(registerOTPThunk.rejected, (state, action) => {
            state.isRegisterOtpLoading = false,
            state.registerOtpError = action.payload
        })
    }
})

export default registerOtpSlice.reducer
export { registerOTPThunk }
export const { setOtpEmail } = registerOtpSlice.actions