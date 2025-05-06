import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseAPI } from "../../utils/api";
import { BLOCK, EMAIL, NETWORK, PASSWORD } from "../../constants/constants";

const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await baseAPI.post("/auth/login/", formData);
      return response.data
    } catch (error) {
      console.log(error, "from slice err");
      const message = error?.response?.data?.email?.[0]
        ? { error_mark: EMAIL, message: error.response.data.email[0] }
        : error?.response?.data?.password?.[0]
        ? { error_mark: PASSWORD, message: error.response.data.password[0] }
        : error?.response?.data?.block?.[0]
        ? { error_mark: BLOCK, message: error.response.data.block[0] }
        : { error_mark: NETWORK, message: "Login failed! Check your network" };
      return rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoginLoading: false,
    loginError: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoginLoading = true;
        state.loginError = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoginLoading = false;
        state.loginError = null;
      })
      .addCase(loginThunk.rejected, (state, actoin) => {
        state.isLoginLoading = false;
        state.loginError = actoin.payload;
      });
  },
});

export default loginSlice.reducer;
export { loginThunk };
