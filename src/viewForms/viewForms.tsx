import React from "react";
import { useStore } from "../store";
import { FaTrash } from "react-icons/fa";
import styles from "./viewForms.module.css";
import { useNavigate } from "react-router-dom";
import AgeBarChart from "../ageBar";

const SubmittedForms: React.FC = () => {
  const navigate = useNavigate();
  const { formData, deleteFormData } = useStore();
  const handleDelete = (index: number) => {
    deleteFormData(index);
  };

  return (
    <div>
      <h1>Submitted Forms</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>No</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Position</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Over 18</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{data.name}</td>
              <td className={styles.td}>{data.position}</td>
              <td className={styles.td}>{data.gender}</td>
              <td
                style={{ color: data.isOver18 ? "green" : "red" }}
                className={styles.td}
              >
                {data.isOver18 ? "Yes" : "No"}
              </td>
              <td className={styles.td}>
                <button
                  onClick={() => handleDelete(index)}
                  className={styles.btn}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Back</button>
      <AgeBarChart />
    </div>
  );
};

export default SubmittedForms;
