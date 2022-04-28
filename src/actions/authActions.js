import * as api from "../api";
import { Navigate } from "react-router-dom";

export const signIn = (credentials, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(credentials);
    localStorage.setItem(
      "access_token",
      JSON.stringify(data.data.access_token)
    );
    localStorage.setItem("user", JSON.stringify(data.data.user));
    localStorage.setItem("verified", false);
    dispatch({ type: "AUTH", payload: data.data });
    navigate("/verify");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (credentials, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(credentials);
    console.log("Step 1");
    localStorage.setItem(
      "access_token",
      JSON.stringify(data.data.access_token)
    );
    console.log("Step 2");
    const newUser = {
      fullname: data.data.user.fullname,
      email: data.data.user.email,
      username: data.data.user.username,
    };
    console.log("Step 3");
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("Step 4");
    dispatch({ type: "AUTH", payload: data.data.user });
    console.log("Step 5");
    localStorage.setItem("verified", false);
    navigate("/verify");
    console.log("Step 6");
  } catch (error) {
    console.log(error);
    console.log("Something");
  }
};

export const resendOTP = () => async (dispatch) => {
  try {
    const data = await api.resendOTP();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const verifyOTP = (OTP, navigate) => async (dispatch) => {
  try {
    await api.verifyOTP({ otp: OTP });
    localStorage.setItem("verified", true);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const getMarketData = () => async (dispatch) => {
  try {
    const data = await api.getMarketData();
    console.log(data);
    if (data.status === "true") return true;
  } catch (error) {
    console.log(error);
  }
};
