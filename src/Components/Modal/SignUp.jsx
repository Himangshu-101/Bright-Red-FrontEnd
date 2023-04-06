/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../Global/Auth/authSlice";
import styles from "./SignUp.module.scss";
import InputControl from "./InputControl";
const SignUp = (props) => {
  const { setSignup, setOpenLogin } = props;
  const [show, setShow] = useState("show");
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    loc: "",
    ComName: "",
    Desig: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      setSignup(false);
    }
    dispatch(reset());
  }, [user, dispatch, isError, isSuccess, message, setSignup]);

  const handleSubmission = () => {
    if (
      !values.name ||
      !values.email ||
      !values.pass ||
      !values.ComName ||
      !values.Desig ||
      !values.loc
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    dispatch(register(values));
  };
  const handleClick = () => {
    setSignup(false);
    setOpenLogin(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <div className={styles.fields}>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Name"
              placeholder="Enter your name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Email"
              placeholder="Enter email address"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              type="email"
            />
            <InputControl
              label="Password"
              placeholder="Enter password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              type={show !== "show" ? "text" : "password"}
            />
          </div>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Location"
              placeholder="Location"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, loc: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Company Name"
              placeholder="Company name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, ComName: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Designation"
              placeholder="Designation"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Desig: event.target.value }))
              }
              type="text"
            />
          </div>
        </div>
        {values.pass.length > 1 && (
          <p
            className={styles.showPassword}
            onClick={() => setShow(show === "show" ? "Hide" : "show")}
          >
            {show} password
          </p>
        )}
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setSignup(false);
            }}
          >
            Cancel
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <a onClick={handleClick}>Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
