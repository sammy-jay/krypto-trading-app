import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyOTP, resendOTP } from "../../actions/authActions";

const Verify = () => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const dispatch = useDispatch();
  const handleOTP = (e) => setOTP(e.target.value);
  const verification = () => {
    if (OTP.length === 4) {
      dispatch(verifyOTP(OTP, navigate));
    }
  };
  return (
    <div className="app">
      <div className="auth">
        <section>
          <form>
            <article>
              <h2>OTP Verification</h2>

              <input
                type="text"
                placeholder="OTP"
                value={OTP}
                onChange={handleOTP}
              />

              <button onClick={verification}>Verify</button>
            </article>
          </form>

          <p>
            Didn't receive one?{" "}
            <span className="underliner" onClick={() => dispatch(resendOTP)}>
              Resend OTP
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Verify;
