import { useEffect } from 'react';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import styles from './MainPage.module.scss';

import useActions from '../../hooks/useActions.ts';
import { useGetAllRowQuery } from '../../app/store/api/entity.api.ts';
import asideData from '../../shared/components/Aside/Aside.services.ts';

import Header from '../../widgets/Header/Header.tsx';
import Aside from '../../shared/components/Aside/Aside.tsx';
import RowFabric from '../../shared/components/TableRow/RowFabric.tsx';

import { enumRowType } from '../../models/types.ts';
import { getSortedTableData } from './MainPage.services.ts';

const MainPage = () => {
  const { setTableData } = useActions();
  const {
    data: tableData,
    isLoading,
    isFetching,
    isError,
  } = useGetAllRowQuery();

  useEffect(() => {
    if (!!tableData) {
      const sortedTableData = getSortedTableData(tableData);
      setTableData(sortedTableData);
    }
  }, [tableData]);

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
            {!!tableData && (
              <table className={styles.main__table}>
                <thead className={styles.table__thead}>
                  <RowFabric rowType={enumRowType.th} parentId={null} />
                </thead>
                <tbody className={styles.table__tbody}>
                  <RowFabric rowType={enumRowType.td} parentId={null} />
                </tbody>
              </table>
            )}

            {(!!isLoading || !!isFetching) && !tableData && (
              <div className={styles.table__isLoading}>
                <p>ПОЛУЧЕНИЕ ДАННЫХ</p>
                <DataUsageIcon className={styles.isLoading__ring} />
              </div>
            )}

            {!!isError && (
              <div className={styles.table__isError}>
                <p>ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ</p>
                <ErrorOutlineIcon className={styles.isError__ring} />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
