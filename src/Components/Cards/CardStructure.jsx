/* eslint-disable no-underscore-dangle */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./CardStructure.module.scss";
import { deleteTrash } from "../../Global/Trash/trashSlice";
const CardStructure = (data) => {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.trash);

  const handleDelete = () => {
    dispatch(deleteTrash(data.id));
    if (isSuccess) toast.success("Deleted");
  };
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
          <li className={styles.butt}>
            <Link className={styles.button} to={`/trash/${data.id}`}>
              Show More
            </Link>
          </li>
        </ul>
        {data.isProfile && (
          <ul>
            <li className={styles.butt}>
              <button className={styles.button} onClick={handleDelete}>
                Delete
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardStructure;
