import React, { useState } from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../actions/authActions";

const Auth = () => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = async (data) => {
    console.log(data);

    if (isSignUp) {
      const creds = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        username: data.username,
      };
      dispatch(signUp(creds, navigate));
    } else {
      const creds = { email: data.email, password: data.password };
      dispatch(signIn(creds, navigate));
    }
  };
  const clearData = () => {
    setValue("fullname", "");
    setValue("username", "");
    setValue("email", "");
    setValue("password", "");
    setValue("OTP", "");
    setValue("password_confirmation", "");
  };

  return (
    <div className="app">
      <div className="auth">
        <section>
          <form>
            <article>
              <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname")}
                />
              )}
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("password_confirmation")}
                />
              )}
              {!isSignUp && (
                <span className="underliner">Forgot Password?</span>
              )}

              <button onClick={handleSubmit(handleChange)}>
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </article>
          </form>
          {isSignUp ? (
            <p>
              Already have an account?{" "}
              <span
                className="underliner"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  clearData();
                }}
              >
                Sign in here
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="underliner"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  clearData();
                }}
              >
                Sign up here
              </span>
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Auth;
