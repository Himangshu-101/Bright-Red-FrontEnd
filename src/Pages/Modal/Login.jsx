/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// const Login = () => {
//     return (
//         <fieldset>
//             <form action="">
//                 <label htmlFor="fname">Your First Name : </label>
//                 <input type="text" />   <br />
//                 <label htmlFor="sname">Your Surname : </label>
//                 <input type="textarea" />
//                 <button type="submit" className="btn btn-primary mb-2">Submit</button>
//             </form>
//         </fieldset>
//     )
// }

// export default Login

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";

import InputControl from "./InputControl";
// import { auth } from "../../firebase";
// import {motion} from "framer-motion"
import styles from "./Login.module.scss";

const Login = (props) => {
  const { setOpenLogin, setSignup } = props;
  // const {setCurrentUser}
  //   const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [show, setShow] = useState("show");
  const [forgot, setForgot] = useState(false);
  //   const [errorMsg, setErrorMsg] = useState("");
  //   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  //   const handleSubmission = () => {
  //     if(forgot){
  //         sendPasswordResetEmail(auth,values.email)
  //           .then(async (res)=>{
  //             setErrorMsg("Email sent")
  //               setForgot(false);
  //           })
  //           .catch((err)=>{
  //             setErrorMsg(err.message);
  //           })
  //     }
  //     else{
  //         if (!values.email || !values.pass) {
  //           setErrorMsg("Fill all fields");
  //           return;
  //         }
  //         setErrorMsg("");

  //         setSubmitButtonDisabled(true);
  //         signInWithEmailAndPassword(auth, values.email, values.pass)
  //           .then(async (res) => {
  //             setSubmitButtonDisabled(false);
  //             setOpenLogin(false);
  //             setCurrentUser(auth.currentUser);
  //             navigate("/");
  //           })
  //           .catch((err) => {
  //             setSubmitButtonDisabled(false);
  //               if(err.code === 'auth/wrong-password'){
  //                 setErrorMsg('Please check the Password');
  //               }
  //               if(err.code === 'auth/user-not-found'){
  //                 setErrorMsg('Please check the Email');
  //               }
  //           });
  //     }
  //   };
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
          {/* <b className={styles.error}>{errorMsg}</b> */}
          <button>{forgot ? "Send Email" : "Login"}</button>
          <button
            className={styles.cancel}
            onClick={() => {
              setOpenLogin(false);
            }}
          >
            Cancel
          </button>
          <p>
            Do not have an account?{" "}
            <span>
              <Link to="/signup" onClick={handleClick}>
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
