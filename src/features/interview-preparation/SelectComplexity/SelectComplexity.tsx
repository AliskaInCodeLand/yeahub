import type { IMockTestProps } from "@/entities/interview-preparation/model/types";
import styles from "./styles.module.css";

const SelectComplexity = ({settingsQuiz, setSettingQuiz} : IMockTestProps) => {
    const selectedId = settingsQuiz.complexity || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onChange(el: any) {
      let arrayComplexity = [...(settingsQuiz.complexity || [])];

      switch (el.id) {
        case "1":
          if (arrayComplexity.includes(1)) {
            arrayComplexity = arrayComplexity.filter(
              (num) => ![1, 2, 3].includes(num)
            );
          } else {
            arrayComplexity = [...arrayComplexity, 1, 2, 3];
          }
          break;
        case "2":
          if (arrayComplexity.includes(4)) {
            arrayComplexity = arrayComplexity.filter(
              (num) => ![4, 5, 6].includes(num)
            );
          } else {
            arrayComplexity = [...arrayComplexity, 4, 5, 6];
          }
          break;
        case "3":
          if (arrayComplexity.includes(7)) {
            arrayComplexity = arrayComplexity.filter(
              (num) => ![7, 8].includes(num)
            );
          } else {
            arrayComplexity = [...arrayComplexity, 7, 8];
          }
          break;
        case "4":
          if (arrayComplexity.includes(9)) {
            arrayComplexity = arrayComplexity.filter(
              (num) => ![9, 10].includes(num)
            );
          } else {
            arrayComplexity = [...arrayComplexity, 9, 10];
          }
          break;
        default:
          arrayComplexity = [];
      }
      arrayComplexity.sort((a, b) => a - b);

      setSettingQuiz((prev) => ({
        ...prev,
        complexity: arrayComplexity,
      }));
    }

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

export default SelectComplexity;
