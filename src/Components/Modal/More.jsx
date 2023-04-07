/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./More.module.scss";
import InputControl from "./InputControl";
import { createTrash } from "../../Global/Trash/trashSlice";
const More = (props) => {
  const { setMore } = props;
  const [values, setValues] = useState({
    name: "",
    price: "",
    location: "",
    company: "",
    details: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.trash);
  const handleSubmission = () => {
    if (
      !values.name ||
      !values.price ||
      !values.company ||
      !values.details ||
      !values.location
    ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    dispatch(createTrash(values)).then(() => {
      if (isSuccess) {
        setMore(false);
        toast.success("item Created");
      }
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Add product</h1>

        <div className={styles.fields}>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Company"
              placeholder="Enter company name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, company: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Name"
              placeholder="Enter name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Location"
              placeholder="Enter Location"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, location: event.target.value }))
              }
              type="text"
            />
          </div>
          <div className={styles.fieldsChild}>
            <InputControl
              label="Price"
              placeholder="Enter Price"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, price: event.target.value }))
              }
              type="text"
            />
            <InputControl
              label="Description"
              placeholder="Enter Description"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, details: event.target.value }))
              }
              type="textarea"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Upload
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              setMore(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
