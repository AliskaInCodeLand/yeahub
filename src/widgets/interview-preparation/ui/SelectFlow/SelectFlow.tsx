import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import type { IMockTestProps } from "@/entities/model/types";
import NavigationLink from "@/features/interview-preparation/ui/NavigationLink/NavigationLink";
import SelectSpecialization from "@/features/interview-preparation/ui/SelectSpecialization/SelectSpecialization";
import SelectComplexity from "@/features/interview-preparation/ui/SelectComplexity/SelectComplexity";
import { SetQuestionCount } from "@/features/interview-preparation/ui/SetQuestionCount/SetQuestionCount";

export const SettingFlow = ({
  settingsQuiz,
  setSettingQuiz
}:IMockTestProps) => {
  return (
    <>
      <NavigationLink />
      <div className={styles.interview_wrapper}>
        <div className={styles.content}>
          <div className={styles.interview}>
            <h3 className={styles.title}>Собеседование</h3>
            <div className={styles.section_categories}>
              <p className={styles.subtitle}>Категории вопросов</p>
              <div className={styles.question_categories}>
                <SelectSpecialization
                  settingsQuiz={settingsQuiz}
                  setSettingQuiz={setSettingQuiz}
                />
              </div>
            </div>
          </div>
          <div className={styles.settings}>
            <div className={styles.levels}>
              <p>Уровень сложности</p>
              <SelectComplexity
                settingsQuiz={settingsQuiz}
                setSettingQuiz={setSettingQuiz}
              />
            </div>
            <div className={styles.levels}>
              <p>Выберите режим</p>
              <div className={styles.levels_list}>
                <button disabled className={styles.level}>
                  Повторение
                </button>
                <button disabled className={styles.level}>
                  Только новые
                </button>
                <button disabled className={styles.level}>
                  Случайные
                </button>
              </div>
            </div>
            <div className={styles.levels}>
              <p>Количество вопросов</p>
              <SetQuestionCount
                settingsQuiz={settingsQuiz}
                setSettingQuiz={setSettingQuiz}
              />
            </div>
          </div>
        </div>
        <NavLink
          to="/public_quiz"
          state={{ test: settingsQuiz }}
          className={styles.transition}
        >
          Начать
          <img src="/Images/arrow-rigth.svg" />
        </NavLink>
      </div>
    </>
  );
};
