/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { reset } from "../../Global/Auth/authSlice";
// register,
import styles from "./More.module.scss";
import InputControl from "./InputControl";
const More = (props) => {
  const { setSignup } = props;
  //   setOpenLogin
  const [show, setShow] = useState("show");
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    loc: "",
    ComName: "",
    Desig: "",
  });
  const [errorMsg] = useState("");
  //   setErrorMsg
  const [submitButtonDisabled] = useState(false);
  //   setSubmitButtonDisabled
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

  //   const handleSubmission = () => {
  //     if (
  //       !values.name ||
  //       !values.email ||
  //       !values.pass ||
  //       !values.ComName ||
  //       !values.Desig ||
  //       !values.loc
  //     ) {
  //       setErrorMsg("Fill all fields");
  //       return;
  //     }
  //     setErrorMsg("");
  //     setSubmitButtonDisabled(true);
  //     dispatch(register(values));
  //   };
  //   const handleClick = () => {
  //     setSignup(false);
  //     setOpenLogin(true);
  //   };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Add product</h1>

        <div className={styles.fields}>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Company"
              placeholder="Enter company name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, CompanyName: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Name"
              placeholder="Enter name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Name: event.target.value }))
              }
              type="email"
            />
            <InputControl
              label="Location"
              placeholder="Enter Location"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Location: event.target.value }))
              }
              //   type={show !== "show" ? "text" : "password"}
            />
          </div>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Price"
              placeholder="Enter Price"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Price: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Description"
              placeholder="Enter Description"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Description: event.target.value }))
              }
              type="textarea"
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
          <button disabled={submitButtonDisabled}>
            {/* onClick={handleSubmission} */}
            Upload
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setSignup(false);
            }}
          >
            Cancel
          </button>
          {/* <p>
            Already have an account?{" "}
            <span>
                <a>Login</a>
                onClick={handleClick} 
            </span>
          </p> 
          */}
        </div>
      </div>
    </div>
  );
};

export default More;
