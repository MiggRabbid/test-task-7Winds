import React from 'react';

import styles from './RowHeader.module.scss';

import { typeColumnMapType } from '../../../../../models/interface';

const RowHeader: React.FC<{ columnMap: typeColumnMapType }> = (props) => {
  const { columnMap } = props;

  return (
    <tr className={styles.row}>
      {Array.from(columnMap).map(([key, value]) => {
        const id = key === 'child' ? 'level' : key;

        return (
          <th id={key} className={`${styles.row__th}`} key={id}>
            {value}
          </th>
        );
      })}
    </tr>
  );
};

export default RowHeader;
