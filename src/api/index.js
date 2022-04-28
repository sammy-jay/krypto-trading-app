import axios from "axios";
const API = axios.create({
  baseURL: "https://api.trycoingro.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("access_token") !== null) {
//     req.headers.Authorization = `Bearer ${JSON.parse(
//       localStorage.getItem("access_token")
//     )}`;
//     return req;
//   }
// });

export const getMarketData = () => API.get("/market/data");
export const signIn = (credentials) => API.post("/auth/login", credentials);
export const signUp = (credentials) => API.post("/auth/register", credentials);
export const getUser = () => API.get("/account/user");
export const verifyOTP = (OTP) => API.post("/account/verify", OTP);
export const resendOTP = () => API.post("/account/resend-otp");
