import Skeleton from '../../../../shared/ui/Sceleton/Sceleton';
import type { currentItemProp } from '../../model/types';
import styles from './styles.module.css';

export const QuestionDes = ({ currentItem }: currentItemProp) => {
  console.log("QuestionDes currentItem: ", currentItem);
  const isLoading = !currentItem;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.answer}>
          <div className={styles.questions_item}>
            <img src="./../../public/Images/figma.png" alt="code" />
            {isLoading ? (
              <>
                <Skeleton width="80%" height="24px" borderRadius="8px" />
                <Skeleton width="60%" height="18px" borderRadius="8px" />
              </>
            ) : (
              <>
                <p className={styles.item_title}>{currentItem?.title}</p>
                <p className={styles.item_description}>
                  {currentItem?.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
