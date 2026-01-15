import styles from './styles.module.css';

function Banner() {
    return (
        <section className={styles.banner} >
            <div className={styles.main}>
                <div>
                    <span className={styles.tag}>Топ вопросов</span>
                    <h1>YEAHUB<br/> помогает расти <br/>и достигать целей</h1>
                    <div className={styles.parag}>
                        <p>
                            Развивайте и улучшайте свои навыки на одной платформе: изучайте новое, готовьтесь к собеседованиям, погружайтесь в нюансы или обновляйте знания — YeaHub поможет справиться с любой задачей
                        </p>
                    </div>
                    <a href='#' className={styles.btn}>Присоединиться</a>
                </div>
                <div className={styles.banner_image_wrapper}>
                    <div className={styles.figma_box}>
                        <div className={styles.figma_item}>
                            <img src="../../../public/Images/Figma-logo.svg" alt="" />
                        </div>
                        <div className={styles.figma_item}>
                            <img src="../../../public/Images/Cub-logo.svg" alt="" />
                        </div>
                        <div className={styles.figma_item}>
                            <img src="../../../public/Images/Cub-logo.svg" alt="" />
                        </div>
                        <div className={styles.figma_item}>
                            <img src="../../../public/Images/Figma-logo.svg" alt="" />
                        </div>
                    </div>
                    <img src='../../../public/Images/banner_image.png' className={styles.banner_image}/>
                    <div className={styles.figma_rectangle}>
                        <p>Прогресс</p>
                        <p>Пройдено 3 из 3 вопрос изучен!</p>
                        <div className={styles.progress_bar}>
                            <div className={styles.progress_line}></div>
                            <div className={styles.progress_line}></div>
                            <div className={styles.progress_line}></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <ul className={styles.list_variants}>
                <li className={styles.variants}>
                    <div className={styles.item_variant}>
                        <div className={styles.icon_variant}>
                            <img src="../../../public/Images/book.svg" alt="" />
                        </div>
                        <div className={styles.item_info}>
                            <p className={styles.item_title}>
                                Большая база вопросов
                            </p>
                            <p className={styles.item_text}>
                                Изучай технологии по актуальным теоритеческим вопросам
                            </p>
                        </div>
                    </div>
                </li>
                <li className={styles.variants}>
                    <div className={styles.item_variant}>
                        <div className={styles.icon_variant}>
                            <img src="../../../public/Images/progress.svg" alt="" />
                        </div>
                        <div className={styles.item_info}>
                            <p className={styles.item_title}>
                                Прогресс обучения
                            </p>
                            <p className={styles.item_text}>
                                Смотрите аналитику по пройденным темам, повторяйте изученные
                            </p>
                        </div>
                    </div>
                </li>
                <li className={styles.variants}>
                    <div className={styles.item_variant}>
                        <div className={styles.icon_variant}>
                            <img src="../../../public/Images/bookmark.svg" alt="" />
                        </div>
                        <div className={styles.item_info}>
                            <p className={styles.item_title}>
                                Удобный тренажёр
                            </p>
                            <p className={styles.item_text}>
                                Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Banner;