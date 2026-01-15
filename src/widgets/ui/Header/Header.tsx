import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.css'
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo_container}>
          <Link to={`/`}>
            <img src="../../../public/Images/logo.svg" alt="logo" />
            <img src="../../../public/Images/Yeahub.svg" alt="logo" />
          </Link>
        </div>
        <a href="#" data-menu="menu">
          База вопросов
        </a>
        <NavLink to={`/interview-preparation`} data-menu="menu">
          {({ isActive }) => (
            <span className={isActive ? "active" : ""}>Тренажер</span>
          )}
        </NavLink>
      </nav>

      {/* Бургер-меню (только для tablet/mobile) */}
      <button className={styles.burger} onClick={toggleMenu} aria-label="Меню">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={styles.auth}>
        <a href="#">Вход</a>
        <a href="#">
          <div className={styles.btn}>Регистрация</div>
        </a>
      </div>

      {/* Мобильное меню (появляется при клике) */}
      <div
        className={`${styles.mobile_menu} ${isMenuOpen ? styles.active : ""}`}
      >
        <a href="#">База вопросов</a>
        <NavLink to={`/interview-preparation`}>
          {({ isActive }) => (
            <span className={isActive ? styles.active_link : ""}>Тренажёр</span>
          )}
        </NavLink>
        <div className={styles.mobile_auth}>
          <a href="#">Вход</a>
          <a href="#" className={styles.btn}>
            Регистрация
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;