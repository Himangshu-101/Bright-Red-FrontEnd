import { useState } from "react";
import styles from "./Navbar.module.scss";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setSignup] = useState(false);
  return (
    <>
      {openLogin && <Login setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      {openSignup && <SignUp setOpenLogin={setOpenLogin} setSignup={setSignup} />}
      <div className={styles.navbar}>
        <div className={styles.title}>
          Trash<span>T</span>rade
        </div>
        <div className={styles.right}>
          <button onClick={() => setOpenLogin(true)}>Login</button>
          <button onClick={() => setSignup(true)}>SignUp</button>
          <i className="fa-sharp fa-solid fa-cart-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
