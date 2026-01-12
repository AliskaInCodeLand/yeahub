import Skeleton from "@/widgets/Sceleton/Sceleton";
import styles from "./styles.module.css";
import type { QuestionProps } from "../../../model/types";



export const AnswerLong = ({ currentItem }: QuestionProps) => {
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
