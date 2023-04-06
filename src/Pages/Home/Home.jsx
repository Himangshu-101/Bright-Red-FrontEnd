// import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";
import { useFetchOnAction } from "../../Hooks";

import style from "./Home.module.scss";

const Home = () => {
  const [fetchData] = useFetchOnAction();

  const { loading } = fetchData;

  // const handleClick = () => {
  //  fetchFunc("/db/demo.json");
  // };

  return <main className={style.home}>{loading ? <h1>Loading...</h1> : <Hero />}</main>;
};

export default Home;
