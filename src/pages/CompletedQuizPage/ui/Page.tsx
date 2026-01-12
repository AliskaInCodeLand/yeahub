import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import type { RootState } from "@/app/appStore";
import { useSelector } from "react-redux";
import { BlockInfo } from "@/widgets/interview-preparation/ui/BlockInfo/BlockInfo";
import { BlockInfoIcon } from "@/widgets/interview-preparation/ui/BlockInfoIcon/BlockInfoIcon";
import { ListQuestions } from "@/widgets/question/ListQuestions/ListQuestions";


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
