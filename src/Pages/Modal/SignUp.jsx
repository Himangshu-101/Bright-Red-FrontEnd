/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputControl from "./InputControl";
import styles from "./SignUp.module.scss";

// import { auth } from "../../firebase";
// import {motion} from "framer-motion"
// import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

const SignUp = (props) => {
  //   const history=useHistory();
  const { setSignup, setOpenLogin } = props;
  //   const{setCurrentUser}
  //   const navigate = useNavigate();
  const [show, setShow] = useState("show");
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  //   const [errorMsg, setErrorMsg] = useState("");
  //   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  //   const handleSubmission = () => {
  //     ////validation for ece.nits.ac.in
  //       let atpos = values.email.indexOf("@");
  //       let domain = values.email.split("@")[1];
  //     if(atpos<1 || domain!=="ece.nits.ac.in"){
  //       setErrorMsg("Only ECE valid");
  //       return;
  //     }
  //     if (!values.name || !values.email || !values.pass) {
  //       setErrorMsg("Fill all fields");
  //       return;
  //     }
  //     setErrorMsg("");

  //     setSubmitButtonDisabled(true);
  //     /////creating new user after validating
  //     createUserWithEmailAndPassword(auth, values.email, values.pass)
  //       .then(async (res) => {
  //         setSubmitButtonDisabled(false);
  //         const user = res.user;
  //         await updateProfile(user, {
  //           displayName: values.name,
  //         });
  //         setCurrentUser(auth.currentUser);
  //         setSignup(false);
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         setSubmitButtonDisabled(false);
  //         if (err.code === 'auth/email-already-in-use') {
  //             setErrorMsg('Email Already in Use');
  //           }else{
  //             setErrorMsg(err.message);
  //           }

  //       });
  //   };
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
              placeholder="Enter Location"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, loc: event.target.value }))
              }
              type={show !== "show" ? "text" : "password"}
            />
            <InputControl
              label="Company Name"
              placeholder="Enter your company name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, ComName: event.target.value }))
              }
              type={show !== "show" ? "text" : "password"}
            />
            <InputControl
              label="Designation"
              placeholder="Enter your Designation"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Desig: event.target.value }))
              }
              type={show !== "show" ? "text" : "password"}
            />
          </div>
        </div>
        {values.pass.length > 1 && (
          <p
            onClick={() => setShow(show === "show" ? "Hide" : "show")}
            style={{
              position: "absolute",
              top: "41%",
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {show} password
          </p>
        )}
        <div className={styles.footer}>
          {/* <b className={styles.error}>{errorMsg}<z/b> */}
          <button>Signup</button>
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
              <Link to="/login" onClick={handleClick}>
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
