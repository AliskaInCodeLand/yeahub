import { useState } from 'react';
import styles from './styles.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { AnswerButton } from '@/features/answers/AnswerButton';
import { ArrowsButtons } from '@/features/quiz/ArrowsButtons';

export const QuestionCard = ({
  length,
  question,
  counterQuiz,
  selectedOption,
  setSelectedOption,
  handleCountMinus,
  handleCountPlus,
  handleOptionClick
}) => {
    const location = useLocation();
    const { test } = location.state || {};
    const [openAnswer, setOpenAnswer] = useState(false);

    function handleOpenAnswer() {
      setOpenAnswer((prev) => !prev);
    }
  return (
    <>
      <div className={styles.interview_wrapper}>
        <div className={styles.links}>
          <ArrowsButtons
            counterQuiz={counterQuiz}
            selectedOption={selectedOption}
            handleCountMinus={handleCountMinus}
            handleCountPlus={handleCountPlus}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.interview}>
            <div className={styles.question}>
              <p className={styles.question_title}>{question.title}</p>
              <button
                className={styles.answer_link}
                onClick={() => handleOpenAnswer()}
              >
                Посмотреть ответ
              </button>
              {openAnswer && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: question.longAnswer,
                  }}
                />
              )}
            </div>
            <div className={styles.estimations}>
              <AnswerButton
                text={"Не знаю"}
                selectedOption={selectedOption}
                handleOptionClick={handleOptionClick}
              />
              <AnswerButton
                text={"Знаю"}
                selectedOption={selectedOption}
                handleOptionClick={handleOptionClick}
              />
            </div>
          </div>
          {question?.imageSrc && (
            <img
              className={styles.question_img}
              src="../../../public/Images/imageQuizz.png"
            />
          )}
        </div>
        <NavLink
          to="/completed_quiz"
          state={{ test: test }}
          className={styles.transition}
        >
          Завершить
        </NavLink>
      </div>
    </>
  );
};