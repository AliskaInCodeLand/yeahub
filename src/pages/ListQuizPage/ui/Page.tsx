import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { AnswerShort } from "@/entities/ui/question/AnswerShort/AnswerShort";
import type { Question } from "@/features/quiz/quizSlice";
import type { RootState } from "@/app/appStore";
import { AnswerLong } from "@/entities/ui/question/AnswerLong/AnswerLong";
import { InfoQuestion } from "@/widgets/question/InfoQuestion/InfoQuestion";
import { QuestionDes } from "@/entities/ui/question/QuestionDes/QuestionDes";

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
