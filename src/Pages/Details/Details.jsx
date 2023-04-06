import React from "react";
import styles from "./Details.module.scss";
import image from "../../db/herocoke.jpg";
const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.left}>
        <div className={styles.first}>
          <div className={styles.tags}>
            <h1>Company:</h1>
            <p>HUe hue hue</p>
          </div>
          <div className={styles.tags}>
            <h1>Email:</h1>
            <p>sit amet consectetur adipisicing elit. Voluptates, pariatur? vjdf </p>
          </div>
          <div className={styles.tags}>
            <h1>Price:</h1>
            <p>HUe hue hue</p>
          </div>
          <div className={styles.tags}>
            <h1>Location:</h1>
            <p>Hue Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.desc}>
            <h2>Description :</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora?
              Corporis totam ad consequatur odio reiciendis, dolor, distinctio quidem
              nulla neque autem architecto! Quisquam rerum veritatis cum nesciunt corrupti
              eaque rem sed voluptatum facere vero, dolorem nulla facilis odit laudantium
              velit et natus dicta consequatur alias ea aliquid? Iusto adipisci,
              aspernatur earum perspiciatis ratione eaque ipsum libero quod amet minus?
            </p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={image} alt="" />
        <h2>Waste Managemant</h2>
      </div>
    </div>
  );
};

export default Details;
