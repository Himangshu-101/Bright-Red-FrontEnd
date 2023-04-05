import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        Trash<span>T</span>rade
      </div>
      <div className={styles.right}>
        <button>Login</button>
        <i className="fa-sharp fa-solid fa-cart-plus"></i>
      </div>
    </div>
  );
};

export default Navbar;
