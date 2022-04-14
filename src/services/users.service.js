import Axios from "axios";

let baseUrl = "http://localhost:5000/api/auth";
let userUrl = "http://localhost:5000/api/users/";

export const registerCenter = async (user) => {
  try {
    const result = await Axios.post(baseUrl + "/register", user);
    localStorage.setItem("token", result.data.token);
    return result.data.user;
  } catch (error) {
    return false;
  }
};

export const addUser = async (user) => {
  try {
    const result = await Axios.post(userUrl, user);

    return result.data.user;
  } catch (error) {
    return false;
  }
};

export const updateUser = async (user) => {
  const result = await Axios.put(userUrl + user.id, user)
  return result.data.updatedUser;
};

export const deleteUser = async (id) => {
  const result = await Axios.delete(userUrl + id);
  return result.data.user;
};

export const getAllUsers = async () => {
  const result = await Axios.get(userUrl);
  return result.data.users;
};

export const getUserByCin = async (cin) => {
  const result = await Axios.get(userUrl + "/" + cin);
  return result.data.user;
};
