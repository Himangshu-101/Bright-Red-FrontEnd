import HomeContainer from "../../Components/HomeContainer/HomeContainer";
// import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <Hero />
      <HomeContainer />
    </div>
  );
};

export default Home;
