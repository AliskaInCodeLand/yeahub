import Skeleton from "@/widgets/Sceleton/Sceleton";
import styles from "./styles.module.css";

export const AnswerLong = ({ currentItem }) => {
  const isLoading = !currentItem;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4 className={styles.title_ans}>Развёрнутый ответ</h4>
          {isLoading ? (
            <>
              <Skeleton width="100%" height="20px" />
              <Skeleton width="90%" height="20px" />
              <Skeleton width="85%" height="20px" />
              <Skeleton width="70%" height="20px" />
            </>
          ) : (
            currentItem && (
              <div
                dangerouslySetInnerHTML={{
                  __html: currentItem?.longAnswer,
                }}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
