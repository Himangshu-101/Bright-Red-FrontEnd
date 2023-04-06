import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOneTrash, reset } from "../../Global/Trash/trashSlice";
import styles from "./Details.module.scss";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneTrash, isError, message } = useSelector((state) => state.trash);
  useEffect(() => {
    dispatch(getOneTrash(id));
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [dispatch, isError, message, id]);
  return (
    <div className={styles.main}>
      <h1>Details Section</h1>
      <div className={styles.details}>
        <div className={styles.left}>
          <div className={styles.first}>
            <div className={styles.tags}>
              <h1>Company:</h1>
              <p>{oneTrash.company}</p>
            </div>
            <div className={styles.tags}>
              <h1>Email:</h1>
              <p>{oneTrash.creator?.email}</p>
            </div>
            <div className={styles.tags}>
              <h1>Price:</h1>
              <p>{oneTrash.price}</p>
            </div>
            <div className={styles.tags}>
              <h1>Location:</h1>
              <p>{oneTrash.location}</p>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.desc}>
              <h2>Description :</h2>
              <p>{oneTrash.details}</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img src={oneTrash.pic} alt="" />
          <h2>{oneTrash.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
