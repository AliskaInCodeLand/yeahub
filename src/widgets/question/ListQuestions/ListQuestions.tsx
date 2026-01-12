import styles from './/styles.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Skeleton from '@/widgets/Sceleton/Sceleton';
import type { Question } from "@/entities/model/types";

type ListQuestionsProps = {
  array: Question[],
  answers: Record<number, string>
};

export const ListQuestions = ({ array, answers }: ListQuestionsProps) => {
  const location = useLocation();
  const { test } = location.state || {};
  const isLoading = Object.keys(answers).length > 0 && !(array.length > 0);

  return (
    <>
      <div className={styles.interview_wrapper}>
        <h4 className={styles.interview_title}>
          Список пройденных вопросов собеседования
        </h4>
        <div className={styles.content}>
          {isLoading ? (
            <>
              {[...Array(4)].map((_, index) => (
                <div className={styles.answer} key={index}>
                  <div className={styles.questions_item}>
                    <Skeleton width="80px" height="80px" borderRadius="12px" />
                    <div className={styles.estimations}>
                      <Skeleton
                        width="180px"
                        height="20px"
                        borderRadius="8px"
                      />
                      <Skeleton
                        width="100px"
                        height="36px"
                        borderRadius="12px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : array.length > 0 ? (
            // Показываем вопросы
            array.map((item: Question) => {
              const know =  answers[`${item.id}`] || "Не знаю";
              return (
                <NavLink
                  to="/list_quiz"
                  state={{ item: item.id }}
                  key={item.id}
                >
                  <div className={styles.answer}>
                    <div className={styles.questions_item}>
                      <img src="./../../public/Images/code.png" alt="code" />
                      <div className={styles.estimations}>
                        <p className={styles.question_title}>{item.title}</p>
                        <button
                          className={clsx(styles.estimation, {
                            [styles.like]: know === "Знаю",
                            [styles.dislike]: know === "Не знаю",
                          })}
                        >
                          {know}
                        </button>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })
          ) : (
            // Нет вопросов
            <p>Нет пройденных вопросов.</p>
          )}
        </div>
        <NavLink
          to="/public_quiz"
          state={{ test: test }}
          className={styles.transition}
        >
          Пройти заново
        </NavLink>
      </div>
    </>
  );
};
