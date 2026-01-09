import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'
import NavigationLink from '@/features/navigationLink/NavigationLink/ui/NavigationLink';
import { SelectComplexity } from '@/features/SelectComplexity';
import SelectSpecialization from '@/features/specialization/SelectSpecialization/ui/SelectSpecialization';
import { SetQuestionCount } from '@/features/SetQuestionCount';

export const SettingFlow = ({
  settingsQuiz,
  handleSpecial,
  handleComplexity,
  handleCount,
}) => {
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
                  selectedId={settingsQuiz.specialization}
                  onSelect={handleSpecial}
                />
              </div>
            </div>
          </div>
          <div className={styles.settings}>
            <div className={styles.levels}>
              <p>Уровень сложности</p>
              <SelectComplexity
                selectedId={settingsQuiz.complexity || []}
                onChange={handleComplexity}
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
                counter={settingsQuiz.limit}
                setCounter={handleCount}
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
