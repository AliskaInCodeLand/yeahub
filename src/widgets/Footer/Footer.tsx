import styles from './styles.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.extra}>
                    <img src='../../../public/Images/Yeahub-ligth.svg' alt='logo'/>
                    <p className={styles.extra_text}>Выбери, каким будет IT завтра, вместе с нами</p>
                    <ul className={styles.extra_list}>
                        <li>
                            <img className={styles.link} src="../../../public/Images/Youtube.svg" alt="Youtube" />
                        </li>
                        <li>
                            <img className={styles.link} src="../../../public/Images/Github.svg" alt="Github" />
                        </li>
                        <li>
                            <img className={styles.link} src="../../../public/Images/Instagram.svg" alt="Instagram" />
                        </li>
                        <li>
                            <img className={styles.link} src="../../../public/Images/Telegram.svg" alt="Telegram" />
                        </li>
                    </ul>
                </div>
                <p className={styles.footer_description}>
                    YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
                </p>
                <hr/>
                <div className={styles.company}>
                    <div className={styles.info}>
                        <p>© 2024 YeaHub</p>
                        <p>Документы</p>
                    </div>
                        
                    <div className={styles.links}>
                        <img className={styles.link} src="../../../public/Images/Figma-logo.svg" alt="Figma-logo" />
                        <img className={styles.link} src="../../../public/Images/Github.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;