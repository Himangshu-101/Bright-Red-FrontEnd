import styles from "./HomeContainer.module.scss";
import CardStructure from "../Cards/CardStructure";
import data from "../../db/demo.json";

const HomeContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        {/* <img className={styles.heroImage} src="images/herocoke.jpg" alt="Hero Section Background"></img> */}
        <div className={styles.searchArea}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search by location..." />
        </div>
      </div>

      <div className={styles.wrapper2}>
        <div className={styles.wrapper2_box}>
          {data.map((item) => (
            <div className={styles.wrapper2_inside}>
              <CardStructure
                src={item.src}
                name={item.name}
                location={item.location}
                compName={item.compName}
                price={item.price}
                details={item.details}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.illust1}>
        <img src="/images/garbage1.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default HomeContainer;
