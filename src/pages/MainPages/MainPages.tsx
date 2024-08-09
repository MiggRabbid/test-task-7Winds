import styles from './MainPages.module.scss';

import Header from '../../widgets/Header/Header';
import Aside from '../../shared/components/Aside/Aside';
import iconFile from '../../assets/icons/icon-file.png';
import iconTrash from '../../assets/icons/icon-trash.png';
import { typeTableKey, typeTbKey } from '../../models/types';

import asideData from '../../data/asideMenuData';
import tableData from '../../data/testTableData';

const MainPage = () => {
  console.log('----- MainPage');

  const tableHeader = [
    'Уровень',
    'Наименование работ',
    'Основная з/п',
    'Оборудование',
    'расходы',
    'Сметная прибыль',
  ];

  const tableHeaderId: typeTableKey = [
    'child',
    'rowName',
    'salary',
    'equipmentCosts',
    'overheads',
    'estimatedProfit',
  ];

  return (
    <main className={styles.container}>
      <Header />

      <div id="main-body" className={styles.body}>
        <Aside menuItems={asideData} />

        <section id="body-main" className={styles.main}>
          <div className={styles.main__tabs}>
            <button className={styles.tabs__btn}>Строительно-монтажные работы</button>
          </div>
          <div className={styles.table__container}>
            <table className={styles.main__table}>
              <thead className={styles.table__thead}>
                <tr>
                  {tableHeader.map((item, index) => {
                    return (
                      <th id={tableHeaderId[index]} className={`${styles.table__th}`}>
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className={styles.table__tbody}>
                <tr>
                  {tableHeaderId.map((item: typeTbKey) => {
                    console.log(tableData[item]);
                    if (item === 'child') {
                      return (
                        <td className={styles.tbody__td_first}>
                          <div className={styles.td__btns}>
                            {/* <div className={styles.btns__path_child}></div> */}
                            <div  className={styles.btns__path_sibling}></div>
                            <button>
                              <img src={iconFile} alt="Создать вложение"  className={styles.btn__create}/>
                            </button>
                            <button>
                              <img src={iconTrash} alt="Удалить"  className={styles.btn__delete}/>
                            </button>
                          </div>
                        </td>
                      );
                    }
                    return <td className={styles.tbody__td}>{tableData[item]}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
