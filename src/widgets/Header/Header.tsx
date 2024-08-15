import styles from './Header.module.scss';

import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';

const Header = () => {
  return (
    <section id="main-header" className={styles.header}>
      <nav className={styles.header__nav}>
        <ol className={styles.nav__list}>
          <li>
            <button className={styles.list__btn}>
              <AppsSharpIcon className={styles.btn__menu} />
            </button>
          </li>
          <li>
            <button className={styles.list__btn}>
              <ReplySharpIcon className={styles.btn__menu} />
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
  );
};

export default Header;
