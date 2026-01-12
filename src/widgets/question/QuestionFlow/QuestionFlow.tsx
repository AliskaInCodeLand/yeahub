import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetQuiz, setQuiz } from "@/features/quiz/quizSlice";
import { allResetAnswers, selectAnswer } from "@/features/answers/answerSlice";
import { QuestionCard } from "@/entities/ui/question/QuestionCard/QuestionCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QuestionFlow = ({ questions }: any) => {
  const [counterQuiz, setCounterQuiz] = useState(0);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dispatch = useDispatch();

  const length = questions?.length;

  useEffect(() => {
    dispatch(allResetAnswers());
    dispatch(resetQuiz());
    if (questions) {
      console.log("questions: ", questions);
      dispatch(setQuiz(questions));
    }
  }, [questions]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    dispatch(
      selectAnswer({
        questionId: questions[counterQuiz].id,
        selectedOption: option,
      })
    );
  };

  function handleCountPlus() {
    setCounterQuiz((prev: number) => {
      return selectedOption && prev !== length - 1 ? prev + 1 : prev;
    });
    setSelectedOption(null);
  }

  function handleCountMinus() {
    setCounterQuiz((prev: number) => {
      return prev === 1 ? prev : prev - 1;
    });
  }

  return (
    <>
      <div style={{ display: "flex", marginBlock: 24 }}>
        <NavLink to={"/"}>Главная</NavLink>
        <div
          style={{
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="../../../public/Images/chevrone_Rigth.svg" alt="" />
        </div>
        <NavLink to={"/quiz"}>Собеседование</NavLink>
        <div
          style={{
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="../../../public/Images/chevrone_Rigth.svg" alt="" />
        </div>
        <div style={{ color: "#6A0BFF" }}>Тренажёр</div>
      </div>
      <div className={styles.progress_wrapper}>
        <div className={styles.progress_text}>
          <h3 className={styles.progress_title}>Вопросы собеседования</h3>
          <p className={styles.progress_info}>
            {counterQuiz + 1}/{length}
          </p>
        </div>
        <div className={styles.progress_line_before}>
          <div
            style={{
              width: `calc(100%/${length} * ${counterQuiz + 1})`,
              backgroundColor: "#6A0BFF",
            }}
            className={styles.progress_line}
          />
        </div>
      </div>
      {questions?.length > 0 && (
        <QuestionCard
          question={questions[counterQuiz]}
          counterQuiz={counterQuiz}
          selectedOption={selectedOption}
          handleCountMinus={handleCountMinus}
          handleCountPlus={handleCountPlus}
          handleOptionClick={handleOptionClick}
        />
      )}
    </>
  );
};
