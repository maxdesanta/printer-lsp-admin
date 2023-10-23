import { api } from "./api";


// get api customer
export const getCustomerApi = async (token) => {
  try {
    const res = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// search api product
export const searchCustomerApi = async (token, value) => {
  try {
    const res = await api.get(`/search-user?nama_user=${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};