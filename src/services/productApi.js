import { api } from "./api";


// get api product
export const getProductApi = async (token) => {
  try {
    const res = await api.get("/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// get detail api product
export const getDetailProductApi = async ({token, id}) => {
  try {
    const res = await api.get(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// post api product
export const addProductApi = async ({ name, price, stock, desc, image, token}) => {
  try {
    const formData = new FormData();
    formData.append('nama_produk', name);
    formData.append('harga_produk', price);
    formData.append('stok', stock);
    formData.append('deskripsi', desc);
    formData.append('gambar', image);

    const res = await api.post("/product/add", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// delete api product
export const deleteProductApi = async ({ token, id }) => {
  try {
    const res = await api.delete(`/product/del/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// update api product
export const updateProductApi = async ({ name, price, stock, desc, image, token, id }) => {
  try {
    const formData = new FormData();
    formData.append('nama_produk', name);
    formData.append('harga_produk', price);
    formData.append('stok', stock);
    formData.append('deskripsi', desc);
    formData.append('gambar', image);

    const res = await api.patch(`/product/update/${id}`, formData, {
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
export const searchProductApi = async (token, value) => {
  try {
    const res = await api.get(`/search?nama_produk=${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};