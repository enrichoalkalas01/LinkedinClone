import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        value: null,
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },

        logout: state => {
            state.user = null
        },
    }
})

export const { login, logout } = userSlice.actions

// Selectors
export const selectUser = (state) => state.counter.user

export default userSlice.reducer