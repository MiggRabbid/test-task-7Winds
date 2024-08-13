import React from 'react';

import styles from './FirstCell.module.scss';

import iconFile from '../../../../assets/icons/icon-file.png';
import iconTrash from '../../../../assets/icons/icon-trash.png';

import { typeColumnMapKey } from '../../../../models/interface';
import { enumRowType } from '../../../../models/types';

interface iRowBodyProps {
  item: typeColumnMapKey;
  rowType?: enumRowType;
  lvl: string;
  rowIsDisabled: boolean;
  onClickAddRow: () => void;
  onClickDelRow: () => void;
  isNewRow: boolean;
}

const BASE_LEFT_POSITION = 18;

const FirstCell: React.FC<iRowBodyProps> = (props) => {
  const {
    item,
    rowType,
    lvl,
    rowIsDisabled,
    onClickAddRow,
    onClickDelRow,
    isNewRow,
  } = props;

  const nestedLvl = lvl.split('-').length;
  const leftPosition = BASE_LEFT_POSITION * nestedLvl;
  const btnsClass = !isNewRow ? styles.td__btns : styles.td__btns_isNewRow;

  return (
    <td className={styles.row__td_first} key={`${lvl}-${item}`}>
      <div className={btnsClass} style={{ left: `${leftPosition}px` }}>
        {rowType === enumRowType.parent && (
          <div className={styles.btns__path_parent} />
        )}
        {rowType === enumRowType.sibling && (
          <div className={styles.btns__path_sibling} />
        )}
        <button onClick={onClickAddRow} disabled={rowIsDisabled}>
          <img
            src={iconFile}
            alt="Создать вложение"
            className={styles.btn__create}
          />
        </button>
        {!isNewRow && (
          <button disabled={rowIsDisabled} onClick={onClickDelRow}>
            <img src={iconTrash} alt="Удалить" className={styles.btn__delete} />
          </button>
        )}
      </div>
    </td>
  );
};

export default FirstCell;
