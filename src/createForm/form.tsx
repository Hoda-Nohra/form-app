import React, { useState } from "react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useStore();
  const [isNameFocused, setISNameFocused] = useState<boolean>(false);
  const [isPositionFocused, setIsPositionFocused] = useState<boolean>(false);
  const [submittedFormData, setSubmittedFormData] = useState({
    name: "",
    position: "",
    gender: "",
    isOver18: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData(submittedFormData);
    // Reset the form
    setSubmittedFormData({
      name: "",
      position: "",
      gender: "",
      isOver18: false,
    });
    console.log("Form data:", submittedFormData);
    console.log(formData);
  };

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (key === "isOver18") {
      const target = e.target as HTMLInputElement;
      setSubmittedFormData({ ...submittedFormData, [key]: target.checked });
    } else {
      const target = e.target as HTMLSelectElement;
      setSubmittedFormData({ ...submittedFormData, [key]: target.value });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formCtnr}>
      <h2 className={styles.formTitle}>User Information Form</h2>
      <label className={styles.formLabel}>
        Name:
        <input
          className={isNameFocused ? styles.borderFocus : styles.borderBlur}
          onFocus={() => setISNameFocused(true)}
          onBlur={() => setISNameFocused(false)}
          type="text"
          name="name"
          value={submittedFormData.name}
          onChange={(value) => handleChange("name", value)}
        />
      </label>
      <br />
      <label className={styles.formLabel}>
        Position:
        <input
          className={isPositionFocused ? styles.borderFocus : styles.borderBlur}
          onFocus={() => setIsPositionFocused(true)}
          onBlur={() => setIsPositionFocused(false)}
          type="text"
          name="position"
          value={submittedFormData.position}
          onChange={(value) => handleChange("position", value)}
        />
      </label>
      <br />
      <label className={styles.formLabel}>
        Gender:
        <select
          className={styles.formSelect}
          name="gender"
          value={submittedFormData.gender}
          onChange={(value) => handleChange("gender", value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label className={styles.formLabel}>
        Over 18:
        <input
          className={styles.formCheckbox}
          type="checkbox"
          name="isOver18"
          checked={submittedFormData.isOver18}
          onChange={(value) => handleChange("isOver18", value)}
        />
      </label>
      <br />
      <button type="submit" className={styles.formBtn}>
        Submit
      </button>
      <button onClick={() => navigate("/")} className={styles.formBtn}>
        Back
      </button>
    </form>
  );
};

export default Form;
