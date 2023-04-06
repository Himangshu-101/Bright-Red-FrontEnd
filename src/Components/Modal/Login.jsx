/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import InputControl from "./InputControl";
import styles from "./Login.module.scss";

const Login = (props) => {
  const { setOpenLogin, setSignup } = props;
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [show, setShow] = useState("show");
  const [forgot, setForgot] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    console.log(values);
    setSubmitButtonDisabled(true);
  };
  const handleClick = () => {
    setOpenLogin(false);
    setSignup(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>{forgot ? "Reset" : "Login"}</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
          type="email"
        />
        {!forgot && (
          <InputControl
            label="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
            type={show !== "show" ? "text" : "password"}
          />
        )}
        {!forgot && (
          <p
            onClick={() => {
              setForgot(true);
              values.pass = "";
            }}
            style={{
              position: "absolute",
              top: "53%",
              left: "57%",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </p>
        )}
        {values.pass.length > 1 && (
          <p
            onClick={() => setShow(show === "show" ? "Hide" : "show")}
            style={{
              position: "absolute",
              top: "53%",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {show} password
          </p>
        )}
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            {forgot ? "Send Email" : "Login"}
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            Cancel
          </button>
          <p>
            Do not have an account?
            <span>
              <a onClick={handleClick}>Sign up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
