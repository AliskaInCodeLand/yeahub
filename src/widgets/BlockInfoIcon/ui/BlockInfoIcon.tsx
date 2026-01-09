import styles from "./styles.module.css";

export const BlockInfoIcon = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4 className={styles.info_title_withIcon}>Развивайтесь с нами!</h4>
          <p>
            Станьте членом сообщества YeaHub и получите полный доступ ко всем
            возможностям платформы!
          </p>
          <div className={styles.info_funcs}>
            <div className={styles.info_func1}>Тренажер собеседований</div>
            <div className={styles.info_func2}>Режим запоминание вопросов</div>
            <div className={styles.info_func3}>
              Статистика и история обучения
            </div>
            <div className={styles.info_func4}>Доступ ко всем подборкам</div>
          </div>
        </div>
        <a href="#" className={styles.community}>
          Стать членом сообщества
          <img src="../../../public/Images/arrowRightPurple.svg" />
        </a>
      </div>
    </>
  );
};
