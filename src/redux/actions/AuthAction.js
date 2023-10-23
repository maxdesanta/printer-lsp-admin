import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi, profileApi } from "../../services/authApi";

export const registerAuth = createAsyncThunk("AuthSlice/register", async ({ name, telp, email, password, alamat }) => {
    try {
      const resApi = registerApi({ name, telp, email, password, alamat });
        
      return resApi;
    } catch (err) {
      console.log(err.message);
    }
  }
);

export const loginAuth = createAsyncThunk("AuthSlice/login", async ({ email, password }) => {
  try {
    const resApi = loginApi({ email, password });
      
    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);

export const profileAuth = createAsyncThunk("AuthSlice/profile", async() => {
  try {
    const token = localStorage.getItem("Authorization");
    const resApi = profileApi(token);
      
    return resApi;
  } catch (err) {
    console.log(err.message);
  }
}
);