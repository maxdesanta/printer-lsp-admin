import { createSlice } from "@reduxjs/toolkit";
import { getProductAction, addProductAction, deleteProductAction, getDetailProductAction, updateProductAction, searchProductAction } from "../actions/ProductAction";

const initialState = {
    isLoading: false,
    isError: false,
    
    isGetProduct: [],
    isAddProduct: null,
    isDeleteProduct: false,
    isDetailProduct: null,
    isUpdateProduct: null,
    isCheckProduct: 'habis',
};

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductAction.fulfilled, (state, action) => {
                state.isGetProduct = action.payload;
                state.isLoading = false;
            })
            .addCase(getProductAction.rejected, (state, action) => {
                state.isGetProduct = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
            .addCase(addProductAction.fulfilled, (state, action) => {
                state.isAddProduct = action.payload;
                state.isLoading = false;
            })
            .addCase(addProductAction.rejected, (state, action) => {
                state.isAddProduct = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })  
            .addCase(deleteProductAction.fulfilled, (state, action) => {
                state.isDeleteProduct = action.payload;
                state.isGetProduct = state.isGetProduct.filter(p => p.id_produk !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteProductAction.rejected, (state, action) => {
                state.isDeleteProduct = false;
                state.isLoading = false;
                state.isError = action.error.message;
            })  
            .addCase(getDetailProductAction.fulfilled, (state, action) => {
                state.isDetailProduct = action.payload;
                state.isLoading = false;
            })
            .addCase(getDetailProductAction.rejected, (state, action) => {
                state.isDetailProduct = false;
                state.isLoading = false;
                state.isError = action.error.message;
            })  
            .addCase(updateProductAction.fulfilled, (state, action) => {
                state.isUpdateProduct = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProductAction.rejected, (state, action) => {
                state.isUpdateProduct = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })  
            .addCase(searchProductAction.fulfilled, (state, action) => {
                state.isGetProduct = action.payload;
                state.isLoading = false;
            })
            .addCase(searchProductAction.rejected, (state, action) => {
                state.isGetProduct = null;
                state.isLoading = false;
                state.isError = action.error.message;
            })
    }
});

// export const { logOutSlice  } = AuthSlice.actions;
export default ProductSlice.reducer;


