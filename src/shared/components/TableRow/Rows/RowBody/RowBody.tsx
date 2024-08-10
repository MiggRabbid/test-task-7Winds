import React from 'react';

import styles from './RowBody.module.scss';

import { getCurrLvl, getRowType } from './RowBody.service';

import FirstCell from '../../Cells/FirstCell';

import { enumRowType } from '../../../../../models/types';
import {
  iEntity,
  typeColumnMapKey,
  typeColumnMapType,
} from '../../../../../models/interface';

interface iRowBodyProps {
  columnMap: typeColumnMapType;
  tableData: iEntity | undefined;
  rowType?: enumRowType;
  lvl: string;
}

const RowBody: React.FC<iRowBodyProps> = (props) => {
  const { columnMap, tableData, rowType, lvl } = props;

  if (!tableData) return null;

  const { child } = tableData;

  return (
    <>
      <tr className={styles.row} key={lvl}>
        {Array.from(columnMap.keys()).map((item: typeColumnMapKey) => {
          if (item === 'child') {
            return (
              <FirstCell
                item={item}
                lvl={lvl}
                rowType={rowType}
                key={`${item}-${lvl}`}
              />
            );
          }

          return (
            <td className={styles.row__td} key={`${lvl}-${item}`}>
              {tableData[item] || ''}
            </td>
          );
        })}
      </tr>
      {child[0] !== null &&
        child.map((nestedData: iEntity | null, index: number) => {
          if (nestedData === null) return null;

          const rowType = getRowType(nestedData.child, index);
          const currLvl = getCurrLvl(lvl, index);
          
          return (
            <RowBody
              columnMap={columnMap}
              tableData={nestedData}
              key={currLvl}
              rowType={rowType}
              lvl={currLvl}
            />
          );
        })}
    </>
  );
};

export default RowBody;
