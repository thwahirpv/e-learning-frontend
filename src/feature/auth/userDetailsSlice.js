import { createSlice } from "@reduxjs/toolkit";


const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        username: '', 
        email: '',
        role: '',
        isAuthenticated: false,
        lastVisitRoute: ''
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.username = action.payload.username
            state.email = action.payload.email
            state.role = action.payload.role
            state.isAuthenticated = true
        }, 
        setLastVisitRoute: (state, action) => {
            state.lastVisitRoute = action.payload
        }
    }
})


export default userDetailsSlice.reducer
export const { setUserDetails, setLastVisitRoute } = userDetailsSlice.actions
