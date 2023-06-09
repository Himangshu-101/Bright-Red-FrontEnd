import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../Global/Auth/authSlice";
import styles from "./Navbar.module.scss";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  const { user, isError, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);
  return (
    <>
      {openLogin && <Login setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      {openSignup && <SignUp setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      <div className={styles.navbar}>
        <div className={styles.title} onClick={() => navigate("/")}>
          Trash<span>T</span>rade
        </div>
        <div className={styles.right}>
          {!user && (
            <>
              <button className={styles.button} onClick={() => setOpenLogin(true)}>
                Login
              </button>
              <button className={styles.button} onClick={() => setSignup(true)}>
                SignUp
              </button>
            </>
          )}
          {user && (
            <>
              <div className={styles.imgContainer} onClick={() => navigate("/profile")}>
                <img src={user.result.pic} alt="user" />
                <p>{user.result.name}</p>
              </div>
              <button className={styles.button} onClick={() => dispatch(logout())}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
