// import { useState } from "react";
import { Link } from "react-router-dom";
import CardStructure from "../../Components/Cards/CardStructure";
import styles from "./Profile.module.scss";

const Profile = () => {
  const data = {
    img: "https://picsum.photos/200/300",
    name: "Hrittike Kumar Saini",
    company: "Ambani Ka Baap",
    desig: "CEO of India",
    email: "xyzabcdehfso@gmail.com",
    // "cart": { }
  };

  const added = [
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
    {
      src: "https://picsum.photos/200/300",
      location: "ABC Land",
      name: "XYZ Agrawal",
      compName: "Uri Baba",
      price: "Negotiable",
      details:
        "lorem ipsumchdvd kbfkbvrgkghvbd gnb;jrk kb;agrhj sajhjrfv da srhjfd v sfd v sfdhv srfhd sh s",
    },
  ];
  // const [text, setText] = useState("")

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>User Dashboard</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper1}>
          <div className={styles.rowContainer}>
            <h4>Name :</h4>
            <p>{data.name}</p>
          </div>
          <div className={styles.rowContainer}>
            <h4>Company :</h4>
            <p>{data.company}</p>
          </div>
          <div className={styles.rowContainer}>
            <h4>Designation :</h4>
            <p>{data.desig}</p>
          </div>
          <div className={styles.rowContainer}>
            <h4>Email :</h4>
            <p>{data.email}</p>
          </div>
          {/* <div className={styles.rowContainer}>
              <p className={styles.cart}>Items in your Cart</p>
              <p></p>
            </div> */}
        </div>
        <div className={styles.wrapperImg}>
          <img src={data.img} alt="Your Avatar" />
        </div>
      </div>
      <div className={styles.wrapper2}>
        <p className={styles.addedItems}>Uploaded Items</p>
        <Link className={styles.button1} to="/more">
          Upload More
        </Link>
        <div className={styles.wrapper2_box}>
          {added.map((item) => (
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
    </div>
  );
};

export default Profile;
