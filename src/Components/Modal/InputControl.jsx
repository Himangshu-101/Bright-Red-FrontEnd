import React from "react";

import styles from "./InputControl.module.scss";

const InputControl = (props) => {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type={props.type} onChange={props.handleChange} {...props} required />
    </div>
  );
};

export default InputControl;
