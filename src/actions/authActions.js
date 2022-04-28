import * as api from "../api";

export const signIn = (credentials) => async (dispatch) => {
  try {
    const response = await api.signIn(credentials);
    localStorage.setItem(
      "access_token",
      JSON.stringify(response.data.access_token)
    );
    localStorage.setItem("user", JSON.stringify(response.data.user));
    dispatch({ type: "AUTH", payload: response.data });
    if (response.status === "true") return true;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (credentials) => async (dispatch) => {
  try {
    const response = await api.signUp(credentials);
    console.log("Step 1");
    localStorage.setItem(
      "access_token",
      JSON.stringify(response.data.access_token)
    );
    console.log("Step 2");
    const newUser = {
      fullname: response.data.user.fullname,
      email: response.data.user.email,
      username: response.data.user.username,
    };
    console.log("Step 3");
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("Step 4");
    dispatch({ type: "AUTH", payload: response.data.user });
    console.log("Step 5");
    if (response.status === "true") return true;
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
    const { status } = await api.verifyOTP(OTP);
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
