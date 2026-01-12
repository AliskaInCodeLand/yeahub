import Skeleton from "@/widgets/Sceleton/Sceleton";
import styles from "./styles.module.css";
import type { QuestionProps } from "@/entities/model/types";

export const AnswerShort = ({ currentItem }: QuestionProps) => {
  const isLoading = !currentItem;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h4 className={styles.title_ans}>Краткий ответ</h4>
          {isLoading ? (
            <>
              <Skeleton width="100%" height="20px" />
              <Skeleton width="80%" height="20px" />
              <Skeleton width="60%" height="20px" />
            </>
          ) : (
            currentItem && (
              <div
                dangerouslySetInnerHTML={{
                  __html: currentItem?.shortAnswer,
                }}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
