import { NavLink } from 'react-router-dom';
import styles from './styles.module.css'


function Simulator() {
    return (
        <section className={styles.container}>
            <div className={styles.questions_wrapper}>
                <div className={styles.questions_container}>
                    <h3 className={styles.questions_title}>Список вопросов</h3>
                    <div className={styles.questions_list_wrapper}>
                        <ul className={styles.questions_list}>
                            <li>
                                <div className={styles.questions_item}>
                                    <img src="./../../public/Images/question1.svg" alt="question1" />
                                    <div>
                                        <p className={styles.question_title}>Что такое Virtual DOM, и как он работает?</p>
                                        <div className={styles.info_container}>
                                            <div className={styles.info}>
                                                <span>Рейтинг:</span>
                                                <div className={styles.count}>4</div>
                                            </div>
                                            <div className={styles.info}>
                                                <span>Cложность:</span>
                                                <div className={styles.count}>10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.questions_item}>
                                    <img src="./../../public/Images/question2.svg" alt="question2" />
                                    <div>
                                        <p className={styles.question_title}>Какие типы данных есть в JS?</p>
                                        <div className={styles.info_container}>
                                            <div className={styles.info}>
                                                <span>Рейтинг:</span>
                                                <div className={styles.count}>3</div>
                                            </div>
                                            <div className={styles.info}>
                                                <span>Cложность:</span>
                                                <div className={styles.count}>2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.questions_item}>
                                    <img src="./../../public/Images/question3.svg" alt="question3" />
                                    <div>
                                        <p className={styles.question_title}>Что такое this?</p>
                                        <div className={styles.info_container}>
                                            <div className={styles.info}>
                                                <span>Рейтинг:</span>
                                                <div className={styles.count}>4</div>
                                            </div>
                                            <div className={styles.info}>
                                                <span>Cложность:</span>
                                                <div className={styles.count}>5</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.questions_item}>
                                    <img src="./../../public/Images/question4.svg" alt="question4" />
                                    <div>
                                        <p className={styles.question_title}>Что такое замыкание в JavaScript?</p>
                                        <div className={styles.info_container}>
                                            <div className={styles.info}>
                                                <span>Рейтинг:</span>
                                                <div className={styles.count}>4</div>
                                            </div>
                                            <div className={styles.info}>
                                                <span>Cложность:</span>
                                                <div className={styles.count}>4</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.convenient_simulator}>
                <div className={styles.simulator_title}>
                    <h3>Удобный тренажёр</h3>
                    <p>Практикуйте изученные темы в нашем тренажёре.</p>
                </div>
                <div className={styles.simulator_advantages}>
                    <ul className={styles.advantages_list}>
                        <li className={styles.advantages_item}>
                            <div className={styles.advantages_icon}>
                                <img src="../../../public/Images/levelUp.svg" alt=""/>
                            </div>
                            <p>Наш тренажёр предоставляет уникальный шанс углубить свои знания и поднять их на новый уровень</p>
                        </li>
                        <li className={styles.advantages_item}>
                            <div className={styles.advantages_icon}>
                                <img src="../../../public/Images/technologies.svg" alt=""/>
                            </div>
                            <p>Изучение технологий ещё никогда не было таким доступным и эффективным</p>
                        </li>
                    </ul>
                    <NavLink to={`/quiz`}>
                    {({ isActive }) => (
                        <span className={isActive ? styles.btnActive : styles.btn}>Начать обучение</span>
                    )}
                </NavLink>
                </div>
            </div>
        </section>
    );
}

export default Simulator;