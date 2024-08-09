import styles from './Header.module.scss';

import iconMenu from '../../assets/icons/icon-menu.png';
import iconBack from '../../assets/icons/icon-back.png';

const Header = () => {
  return (
    <section id="main-header" className={styles.header}>
    <nav className={styles.header__nav}>
      <ol className={styles.nav__list}>
        <li>
          <button className={styles.list__btn}>
            <img src={iconMenu} alt="меню" className={styles.btn__menu} />
          </button>
        </li>
        <li>
          <button className={styles.list__btn}>
            <img src={iconBack} alt="назад" className={styles.btn__back} />
          </button>
        </li>
      </ol>
    </nav>

    <div className={styles.header_tabs}>
      <div className={styles.tabs__btnGroup}>
        <button className={styles.btnGroup__item_active}>Просмотр</button>
        <button className={styles.btnGroup__item}>Управление</button>
      </div>
    </div>
  </section>
  )
}

export default Header;