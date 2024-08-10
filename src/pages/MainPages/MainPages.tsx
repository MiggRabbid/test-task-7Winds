import styles from './MainPages.module.scss';

import Header from '../../widgets/Header/Header';
import Aside from '../../shared/components/Aside/Aside';
import RowFabric from '../../shared/components/TableRow/RowFabric';

import { enumRowType } from '../../models/types';

import asideData from '../../data/asideMenuData';
import tableData from '../../data/testTableData';

const MainPage = () => {
  console.log('----- MainPage');
  return (
    <main className={styles.container}>
      <Header />

      <div id="main-body" className={styles.body}>
        <Aside menuItems={asideData} />

        <section id="body-main" className={styles.main}>
          <div className={styles.main__tabs}>
            <button className={styles.tabs__btn}>
              Строительно-монтажные работы
            </button>
          </div>
          <div className={styles.table__container}>
            <table className={styles.main__table}>
              <thead className={styles.table__thead}>
                <RowFabric rowType={enumRowType.th} />
              </thead>
              <tbody className={styles.table__tbody}>
                <RowFabric rowType={enumRowType.td} rowData={tableData} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
