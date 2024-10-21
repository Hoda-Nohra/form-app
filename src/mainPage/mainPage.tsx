import { useNavigate } from "react-router-dom";
import styles from "./mainPage.module.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <h1 className={styles.mainTitle}>Main Page</h1>
      <div className={styles.btnctnr}>
        <button className={styles.mainBtn} onClick={() => navigate("/form")}>
          Create form
        </button>
        <button
          className={styles.mainBtn}
          onClick={() => navigate("/view-forms")}
        >
          View forms
        </button>
      </div>
    </div>
  );
};

export default MainPage;
