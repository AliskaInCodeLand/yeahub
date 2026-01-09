import styles from "./styles.module.css";

export const BlockInfo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4 className={styles.info_title}>
            YeaHub объединяет IT-специалистов
          </h4>
          <p>
            Подпишитесь на наш канал и станьте частью IT-сообщества, которое
            растёт вместе с вами.
          </p>
          <div className={styles.info_links}>
            <div className={styles.info_link1}>
              YeaHub: Главные новости<br></br> и обновления платформы
            </div>
            <div className={styles.info_link2}>
              YeaHub Community: Общение, обмен<br></br> опытом и поддержка
              единомышленников
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
