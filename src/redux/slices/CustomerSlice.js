import { createSlice } from "@reduxjs/toolkit";
import { getCustomerAction, searchCustomerAction } from "../actions/CustomerAction";

const initialState = {
    isLoading: false,
    isError: false,
    
    isGetCustomer: [],
};

const CustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCustomerAction.fulfilled, (state, action) => {
                state.isGetCustomer = action.payload;
                state.isLoading = false;
            })
            .addCase(getCustomerAction.rejected, (state, action) => {
                state.isGetCustomer = null;
                state.isLoading = false;
                state.isError = action.error.message;
            }) 
            .addCase(searchCustomerAction.fulfilled, (state, action) => {
                state.isGetCustomer = action.payload;
                state.isLoading = false;
            })
            .addCase(searchCustomerAction.rejected, (state, action) => {
                state.isGetCustomer = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
    }
});

export default CustomerSlice.reducer;


