import React, { useState } from 'react';

import styles from './Aside.module.scss';

import iconArrow from '../../../assets/icons/icon-arrow.png';
import iconItem from '../../../assets/icons/icon-item.png';

const Aside: React.FC<{ menuItems: string[] }> = (props) => {
  const [activeBtn] = useState('СМР');
  const { menuItems } = props;

  return (
    <aside id="aside" className={styles.aside}>
      <div className={styles.aside__title}>
        <div className={styles.title__container}>
          <div className={styles.title__text}>
            <p className={styles.text__main}>Название проекта</p>
            <p className={styles.text__second}>Аббревиатура</p>
          </div>
          <button className={styles.title__btn}>
            <img src={iconArrow} alt="развернуть меню" />
          </button>
        </div>
      </div>
      <div className={styles.aside__menu}>
        {menuItems.map((item) => {
          const btnClass = item === activeBtn ? styles.menu__button_active : styles.menu__button;
          return (
            <button className={btnClass}>
              <img src={iconItem} alt={item} />
              <p>{item}</p>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Aside;
