import styles from "./styles.module.css";

export const SelectComplexity = ({ selectedId, onChange }) => {
  return (
    <>
      <div className={styles.levels_list} onClick={(e) => onChange(e.target)}>
        <button
          id="1"
          className={styles.level}
          style={{
            borderColor: selectedId.includes(1) ? "#6C34FF" : "#BABABA",
          }}
        >
          1-3
        </button>
        <button
          id="2"
          className={styles.level}
          style={{
            borderColor: selectedId.includes(4) ? "#6C34FF" : "#BABABA",
          }}
        >
          4-6
        </button>
        <button
          id="3"
          className={styles.level}
          style={{
            borderColor: selectedId.includes(7) ? "#6C34FF" : "#BABABA",
          }}
        >
          7-8
        </button>
        <button
          id="4"
          className={styles.level}
          style={{
            borderColor: selectedId.includes(9) ? "#6C34FF" : "#BABABA",
          }}
        >
          9-10
        </button>
      </div>
    </>
  );
};
