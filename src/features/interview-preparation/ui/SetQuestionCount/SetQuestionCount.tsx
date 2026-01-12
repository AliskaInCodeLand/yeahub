import type { IMockTestProps } from "@/entities/model/types";
import styles from "./styles.module.css";

export const SetQuestionCount = ({settingsQuiz, setSettingQuiz} : IMockTestProps) => {
    const counter= settingsQuiz.limit || 1;
    
    function setCounter(num: number) {
    setSettingQuiz((prev) => ({
        ...prev,
        limit: prev.limit ? (num>0 ? prev.limit + 1 : (prev.limit >1 ? prev.limit - 1 : 1)) : 1,
    }));
    }

  function handleCountPlus() {
    setCounter(Math.min(counter + 1, 100));
    console.log("counter: ", counter);
  }

  function handleCountMinus() {
    setCounter(Math.max(counter - 1, 1));
  }

  return (
    <>
      <div className={styles.level}>
        <button className={styles.btn} onClick={handleCountMinus}>
          <img src="/Images/minus.svg" alt="minus" />
        </button>
        {counter}
        <button className={styles.btn} onClick={handleCountPlus}>
          <img src="/Images/plus.svg" alt="plus" />
        </button>
      </div>
    </>
  );
};
