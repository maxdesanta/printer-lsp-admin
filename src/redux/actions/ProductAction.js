import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductApi, addProductApi, deleteProductApi, getDetailProductApi, updateProductApi, searchProductApi } from "../../services/productApi";

// menampilkan produk
export const getProductAction = createAsyncThunk("product/get", async() => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await getProductApi(token);
    
    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);

// menampilkan detail produk
export const getDetailProductAction = createAsyncThunk("product/getId", async({id}) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await getDetailProductApi({ token,id });
    
    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);

// menambahkan produk
export const addProductAction = createAsyncThunk("product/add", async ({ name, price, stock, desc, image }) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await addProductApi({ name, price, stock, desc, image, token });

    return resApi;
  } catch(err) {
    console.log(err.message);
  }
})

// menghapus produk
export const deleteProductAction = createAsyncThunk("product/delete", async({id}) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await deleteProductApi({ token, id });

    return resApi;
  } catch(err) {
    console.log(err.message);
  }
})

// mengupdate produk
export const updateProductAction = createAsyncThunk("product/update", async ({ name, price, stock, desc, image, id }) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await updateProductApi({ name, price, stock, desc, image, token, id });

    return resApi;
  } catch(err) {
    console.log(err.message);
  }
})

// mencari data produk
export const searchProductAction = createAsyncThunk("product/search", async (value) => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = await searchProductApi(token, value);

    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);