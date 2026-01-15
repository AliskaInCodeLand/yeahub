import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { BlockInfoIcon } from "../../../widgets/ui/BlockInfoIcon/BlockInfoIcon";
import { BlockInfo } from "../../../widgets/ui/BlockInfo/BlockInfo";
import { ListQuestions } from "../../../widgets/ui/quiz/ListQuestions/ListQuestions";

function CompletedQuizPage() {
  const answers = useSelector((state: RootState) => state.answer.answers);
  const quiz = useSelector((state: RootState) => state.quiz.quiz);
  const array = Object.values(quiz).flat(1);

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
        <div style={{ color: "#6A0BFF" }}>Список пройденных вопросов</div>
      </div>
      <div className={styles.container}>
        <BlockInfoIcon />
        <BlockInfo />
      </div>
      <ListQuestions array={array} answers={answers} />
    </>
  );
}

export default CompletedQuizPage;
