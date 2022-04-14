import Axios from "axios";

let baseUrl = "http://localhost:5000/api/auth";

export const register = async (user) => {
  try {
    const result = await Axios.post(baseUrl + "/register", user);
    localStorage.setItem("token", result.data.token);
    return result.data.user;
  } catch (error) {
    return false;
  }
};

export const registerpharmacy = async (user) => {
  try {
    const result = await Axios.post(baseUrl + "/registerpharmacy", user);
    localStorage.setItem("token", result.data.token);
    return result.data.user;
  } catch (error) {
    return false;
  }
};

export const login = async (user) => {
  try {
    const result = await Axios.post(baseUrl + "/login", user);
    localStorage.setItem("token", JSON.stringify(result.data.token));
    // localStorage.setItem("token", result.data.token);
    return result.data;
  } catch (error) {
    throw error;
  }
};
