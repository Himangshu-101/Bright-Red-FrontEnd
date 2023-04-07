/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import { useSelector } from "react-redux";
import CardStructure from "../../Components/Cards/CardStructure";
import styles from "./Profile.module.scss";
import { More } from "../../Components";
const Profile = () => {
  const [mo, setMore] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { trash } = useSelector((state) => state.trash);

  return (
    <>
      {mo && <More setMore={setMore} />}
      <div className={styles.container}>
        <div className={styles.header}>
          <p>User Dashboard</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapper1}>
            <div className={styles.rowContainer}>
              <h4>Name :</h4>
              <p>{user.result.name}</p>
            </div>
            <div className={styles.rowContainer}>
              <h4>Company :</h4>
              <p>{user.result.ComName}</p>
            </div>
            <div className={styles.rowContainer}>
              <h4>Designation :</h4>
              <p>{user.result.Desig}</p>
            </div>
            <div className={styles.rowContainer}>
              <h4>Email :</h4>
              <p>{user.result.email}</p>
            </div>
          </div>
          <div className={styles.wrapperImg}>
            <img src={user.result.pic} alt="Your Avatar" />
          </div>
        </div>
        <div className={styles.wrapper2}>
          <p className={styles.addedItems}>Uploaded Items</p>
          <button className={styles.button1} onClick={() => setMore(true)}>
            Upload More
          </button>
          <div className={styles.wrapper2_box}>
            {trash
              .filter((item) => item.creator === user.result._id)
              .map((item) => (
                <div className={styles.wrapper2_inside}>
                  <CardStructure
                    src={item.pic}
                    id={item._id}
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
      </div>
    </>
  );
};

export default Profile;
