import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomerApi, searchCustomerApi } from "../../services/customerApi";

// menampilkan produk
export const getCustomerAction = createAsyncThunk("customer/get", async() => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await getCustomerApi(token);
    
    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);

// mencari data produk
export const searchCustomerAction = createAsyncThunk("customer/search", async (value) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await searchCustomerApi(token, value);

    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);