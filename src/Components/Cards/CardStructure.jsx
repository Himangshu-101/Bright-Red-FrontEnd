import { Link } from "react-router-dom";
import styles from "./CardStructure.module.scss";

const CardStructure = (data) => {
  return (
    <div className={styles.bigContain}>
      <div className={styles.card}>
        <img src={data.src} alt="Avatar" />
      </div>
      <div className={styles.container}>
        <ul>
          <li>
            <b className={styles.name}>Name: {data.name}</b>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.comp}>Company: {data.compName}</b>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.loc}>Location: {data.location}</b>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.price}>Price: {data.price}</b>
          </li>
        </ul>
        <ul>
          {/* <li><b className={styles.loc}>Details: </b></li> */}
          {/* <li>
            <p>{data.details}</p>
          </li> */}
        </ul>
        <ul>
          <li className={styles.butt}>
            <Link className={styles.button} to="/">
              Show More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardStructure;
