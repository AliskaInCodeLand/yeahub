import Skeleton from '@/widgets/Sceleton/Sceleton';
import styles from './styles.module.css'
import type { ISpecializations, QuestionProps } from '@/entities/model/types';

export const InfoQuestion = ({ currentItem }: QuestionProps) => {
    const isLoading = !currentItem;
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.settings}>
            <div className={styles.levels}>
              <p>Уровень:</p>
              {isLoading ? (
                <div className={styles.info_container}>
                  <div className={styles.rating}>
                    <Skeleton width="100px" height="24px" borderRadius="8px" />
                  </div>
                  <div className={styles.rating}>
                    <Skeleton width="100px" height="24px" borderRadius="8px" />
                  </div>
                </div>
              ) : (
                <div className={styles.info_container}>
                  <div className={styles.rating}>
                    <span>Cложность:</span>
                    <div className={styles.rating_count}>
                      {currentItem?.complexity}
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <span>Рейтинг:</span>
                    <div className={styles.rating_count}>
                      {currentItem?.rate}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.levels}>
              <p>Навыки:</p>
              {isLoading ? (
                <ul className={styles.question_categories}>
                  {[...Array(3)].map((_, i) => (
                    <li key={i} className={styles.specialization}>
                      <Skeleton
                        width="80px"
                        height="24px"
                        borderRadius="12px"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.question_categories}>
                  {currentItem?.questionSpecializations.map(
                    (item: ISpecializations) => (
                      <li key={item.id} className={styles.specialization}>
                        {item.title}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <div className={styles.levels}>
              <p>Ключевые слова:</p>
              {isLoading ? (
                <ul className={styles.links_hashtag}>
                  {[...Array(4)].map((_, i) => (
                    <li key={i}>
                      <Skeleton
                        width="100px"
                        height="20px"
                        borderRadius="12px"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                currentItem && (
                  <ul className={styles.links_hashtag}>
                    {currentItem.keywords.map((keyword) => (
                      <li key={keyword}>
                        #{keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </div>
        </div>
        <p className={styles.info_author}>
          Автор:
          {isLoading ? (
            <Skeleton width="120px" height="16px" borderRadius="8px" />
          ) : (
            <a className={styles.link_author} href="#">
              {currentItem?.createdBy.username}
            </a>
          )}
        </p>
      </div>
    </>
  );
};