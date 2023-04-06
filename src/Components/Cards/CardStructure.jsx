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
            <b className={styles.comp}>Company: </b>
          </li>
          <li>
            <p>{data.compName}</p>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.name}>Name: </b>
          </li>
          <li>
            <p>{data.name}</p>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.loc}>Location: </b>
          </li>
          <li>
            <p>{data.location}</p>
          </li>
        </ul>
        <ul>
          <li>
            <b className={styles.price}>Price: </b>
          </li>
          <li>
            <p>{data.price}</p>
          </li>
        </ul>
        <ul>
          {/* <li><b className={styles.loc}>Details: </b></li> */}
          <li>
            <p>{data.details}</p>
          </li>
        </ul>
        <ul>
          <li className={styles.butt}>
            <Link className={styles.button1} to="/">
              Show More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardStructure;
