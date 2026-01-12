import styles from './styles.module.css';

type AnswerButtonProps = {
  text: string;
  selectedOption: string | null;
  handleOptionClick: (option: string) => void;
};

export const AnswerButton = ({
  text,
  selectedOption,
  handleOptionClick,
}: AnswerButtonProps) => {
  return (
    <>
      {text === "Не знаю" ? (
        <button
          onClick={() => handleOptionClick("Не знаю")}
          className={[styles.estimation, styles.dislike].join(" ")}
          style={{
            color: selectedOption === "Не знаю" ? "#6C34FF" : "#474747",
            backgroundColor:
              selectedOption === "Не знаю" ? "#F8F8F8" : "transparent",
            borderColor: selectedOption === "Не знаю" ? "#6C34FF" : "#F8F8F8",
          }}
        >
          Не знаю
        </button>
      ) : (
        <button
          onClick={() => handleOptionClick("Знаю")}
          className={[styles.estimation, styles.like].join(" ")}
          style={{
            color: selectedOption === "Знаю" ? "#6C34FF" : "#474747",
            backgroundColor:
              selectedOption === "Знаю" ? "#F8F8F8" : "transparent",
            borderColor: selectedOption === "Знаю" ? "#6C34FF" : "transparent",
          }}
        >
          Знаю
        </button>
      )}
    </>
  );
};
