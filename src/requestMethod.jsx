import axios from "axios";
import AuthService from "./services/auth.service";
const BASE_URL = "http://192.168.137.36:7132/";
const user = AuthService.getCurrentUser();

const TOKEN = user?.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "*/*",
    Authorization: `bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});
