import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        _id:"",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
    },
    reducers:{
        loginUser:(state,action) => {
            state._id = action.payload._id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phoneNumber = action.payload.phoneNumber;
            state.email = action.payload.email;
            state.features = action.payload.features;
        },
        logoutUser:(state,action) => {
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.phoneNumber = "";
            state.email = "";
        }
    }
})

export const {
    loginUser,
    logoutUser
} = userSlice.actions;

export default userSlice.reducer;