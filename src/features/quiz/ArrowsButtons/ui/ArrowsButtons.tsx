import styles from "./styles.module.css";

export const ArrowsButtons = ({
  counterQuiz,
  selectedOption,
  handleCountMinus,
  handleCountPlus,
}) => {
  return (
    <>
      <button
        onClick={handleCountMinus}
        disabled={counterQuiz === 0}
        className={styles.back_link}
      >
        <img src="../../../public/Images/chevrone_Left.svg" alt="" />
        <span>Назад</span>
      </button>
      <button
        onClick={handleCountPlus}
        disabled={!selectedOption || counterQuiz === length - 1}
        className={styles.next_link}
      >
        <span>Далее</span>
        <img src="../../../public/Images/chevrone_Rigth.svg" alt="" />
      </button>
    </>
  );
};
