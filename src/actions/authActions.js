import * as api from "../api";

export const signIn = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.signIn(credentials);
    localStorage.setItem(
      "access_token",
      JSON.stringify(data.data.access_token)
    );
    localStorage.setItem("user", JSON.stringify(data.data.user));
    dispatch({ type: "AUTH", payload: data.data });
    if (data.status === "true") return true;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (credentials) => async (dispatch) => {
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
    if (data.status === "true") return true;
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

export const verifyOTP = (OTP) => async (dispatch) => {
  try {
    const { status } = await api.verifyOTP({ otp: OTP });
    if (status === "true") return true;
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
