/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getTrash, searchTrash, reset } from "../../Global/Trash/trashSlice";
import styles from "./HomeContainer.module.scss";
import CardStructure from "../Cards/CardStructure";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HomeContainer = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { trash, isError, message } = useSelector((state) => state.trash);
  // const query = useQuery();
  // const navigate = useNavigate();
  // const page = query.get("page") || 1;
  // const searchQuery = query.get("searchQuery");

  const handleSearch = () => {
    if (search.trim()) {
      dispatch(searchTrash());
    }
  };
  useEffect(() => {
    dispatch(getTrash());
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [dispatch, isError, message]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper1}>
        <div className={styles.searchArea}>
          <button onClick={handleSearch} type="submit" className={styles.button}>
            <i className="fa fa-search"></i>
          </button>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            value={search}
            placeholder="Search by location..."
          />
        </div>
      </div>

      <div className={styles.wrapper2}>
        <div className={styles.wrapper2_box}>
          {trash.map((item) => (
            <div className={styles.wrapper2_inside}>
              <CardStructure
                src={item.pic}
                name={item.name}
                location={item.location}
                compName={item.company}
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
