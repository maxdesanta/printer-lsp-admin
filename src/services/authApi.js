import { api } from "./api";

// Register api
export const registerApi = async ({ name, telp, email, password, alamat }) => {
  try {
    const res = await api.post("/register", {
      nama: name,
      email: email,
      password: password,
      no_hp: telp,
      alamat: alamat,
      role: "admin",
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};

// LOGIN api
export const loginApi = async ({ email, password }) => {
  try {
    const res = await api.post("/login", {
      email: email,
      password: password,
    });

    localStorage.setItem("Authorization", res.data.token);

    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

// PROFILE api
export const profileApi = async (token) => {
  try {
    const res = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.message;
  } catch (err) {
    console.log(err.message);
  }
};
