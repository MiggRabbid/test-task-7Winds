import React, { useEffect, useState } from 'react';

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
  isParentEdited?: boolean;
}

const RowBody: React.FC<iRowBodyProps> = (props) => {
  const { columnMap, tableData, rowType, lvl, isParentEdited } = props;
  const [isEdited, setIsEdit] = useState(isParentEdited);

  useEffect(() => setIsEdit(!!isParentEdited), [isParentEdited, setIsEdit]);
  if (!tableData) return null;

  const { child } = tableData;
  const numberChildren = child.length;
  const rowClass = !isEdited ? styles.row : styles.row_block;

  return (
    <>
      <tr className={rowClass} key={lvl}>
        {Array.from(columnMap.keys()).map((item: typeColumnMapKey) => {
          if (item === 'child') {
            return (
              <FirstCell
                item={item}
                lvl={lvl}
                rowType={rowType}
                key={`${item}-${lvl}`}
                onClickEdit={() => setIsEdit(!isEdited)}
                isParentEdited={!!isParentEdited}
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

          const rowType = getRowType(nestedData.child, index, numberChildren);
          const currLvl = getCurrLvl(lvl, index);

          return (
            <RowBody
              columnMap={columnMap}
              tableData={nestedData}
              key={currLvl}
              rowType={rowType}
              lvl={currLvl}
              isParentEdited={isEdited}
            />
          );
        })}
    </>
  );
};

export default RowBody;
