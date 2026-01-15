import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import type { Question } from "../../../entities/quiz/model/types";
import { QuestionDes } from "../../../entities/quiz/ui/QuestionDes/QuestionDes";
import { AnswerShort } from "../../../entities/interview-preparation/ui/AnswerShort/AnswerShort";
import { AnswerLong } from "../../../entities/interview-preparation/ui/AnswerLong/AnswerLong";
import { InfoQuestion } from "../../../widgets/ui/quiz/InfoQuestion/InfoQuestion";

function ListQuizPage() {
  const location = useLocation();
  const { item } = location.state || {};

  const quiz = useSelector((state: RootState) => state.quiz.quiz);

  const array = Object.values(quiz).flat(1);
  const currentItem = array.find((q: Question) => q.id === item);

  return (
    <>
      <div className={styles.links}>
        <NavLink to="/completed_quiz" className={styles.back_link}>
          <img src="../../../public/Images/chevrone_Left.svg" alt="" />
          <span>Назад</span>
        </NavLink>
      </div>
      <div className={styles.container}>
        <div className={styles.text_answer}>
          <QuestionDes currentItem={currentItem} />
          <AnswerShort currentItem={currentItem} />
          <AnswerLong currentItem={currentItem} />
        </div>
        <InfoQuestion currentItem={currentItem} />
      </div>
    </>
  );
}

export default ListQuizPage;
