import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7091/Auth/";

const login = (accountEmail, password) => {
  return axios
    .post(API_URL + "login", {
      accountEmail,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.accountEmail)
        localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    });
};

const logout = () => {

  localStorage.removeItem("user");
  return axios.post(API_URL + "logout", authHeader).then((response) => {
    return response.data;
  });
 
  
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
