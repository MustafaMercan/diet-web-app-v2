import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
    name:"root",
    initialState:{
        _id:"",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
    },
    reducers:{
        loginRoot:(state,action) => {
            state._id = action.payload._id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phoneNumber = action.payload.phoneNumber;
            state.email = action.payload.email;
        },
        logoutRoot:(state,action) => {
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.phoneNumber = "";
            state.email = "";
        }
    }
})


export const {
    loginRoot,
    logoutRoot
} = rootSlice.actions;

export default rootSlice.reducer;