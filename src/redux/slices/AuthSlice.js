import { createSlice } from "@reduxjs/toolkit";
import { registerAuth, loginAuth, profileAuth } from "../actions/AuthAction";

const initialState = {
    isRegisterResult: null,
    isRegisterLoading: false,
    isRegisterError: false,
  
    isLoginResult: null,
    isLoginLoading: false,
    isLoginError: false,

    isUserResult: null,
    isUserNamaResult: null,
    isUserLoading: false,
    isUserError: false,
};

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logOutSlice : (state) => {
            state.isLoginResult = null;
            state.isUserResult = null;
            state.isUserNamaResult = null;
            localStorage.removeItem("Authorization");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAuth.fulfilled, (state, action) => {
                state.isRegisterResult = action.payload;
                state.isRegisterLoading = false;
            })
            .addCase(registerAuth.rejected, (state, action) => {
                state.isRegisterResult = null;
                state.isRegisterLoading = false;
                state.isRegisterError = action.error.message;
            })
            .addCase(loginAuth.fulfilled, (state, action) => {
                state.isLoginResult = action.payload;
                state.isLoginLoading = false;
            })
            .addCase(loginAuth.rejected, (state, action) => {
                state.isLoginResult = null;
                state.isLoginLoading = false;
                state.isLoginError = action.error.message;
            })  
            .addCase(profileAuth.fulfilled, (state, action) => {
                state.isUserResult = action.payload;
                state.isUserNamaResult = action.payload.nama;
                state.isUserLoading = false;
            })
            .addCase(profileAuth.rejected, (state, action) => {
                state.isUserResult = null;
                state.isUserLoading = false;
                state.isUserError = action.error.message;
            })  
    }
});

export const { logOutSlice  } = AuthSlice.actions;
export default AuthSlice.reducer;


