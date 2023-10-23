import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// import slice
import AuthSlice from "./slices/AuthSlice";
import ProductSlice from "./slices/ProductSlice";
import CustomerSlice from "./slices/CustomerSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        product: ProductSlice,
        customer: CustomerSlice
    },
    middleware: [thunk]
});

export default store;