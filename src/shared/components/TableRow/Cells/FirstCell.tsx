import React from 'react';

import styles from './FirstCell.module.scss';

import iconFile from '../../../../assets/icons/icon-file.png';
import iconTrash from '../../../../assets/icons/icon-trash.png';

import { typeColumnMapKey } from '../../../../models/interface';
import { enumRowType } from '../../../../models/types';

interface iRowBodyProps {
  lvl: string;
  id: string;
  item: typeColumnMapKey;
  rowType?: enumRowType;
  isNewRow: boolean;
  rowIsDisabled: boolean;
  onClickAddRow: () => void;
  onClickDelRow: () => void;
}

const BASE_LEFT_POSITION = 18;

const FirstCell: React.FC<iRowBodyProps> = (props) => {
  const {
    lvl,
    id,
    item,
    rowType,
    isNewRow,
    rowIsDisabled,
    onClickAddRow,
    onClickDelRow,
  } = props;

  const nestedLvl = lvl.split('-').length;
  const leftPosition = BASE_LEFT_POSITION * nestedLvl;
  const btnsClass =
    !rowIsDisabled && !isNewRow ? styles.td__btns : styles.td__btns_isNewRow;

  return (
    <td className={styles.row__td_first} key={`${lvl}-${item}`} id={id}>
      <div className={btnsClass} style={{ left: `${leftPosition}px` }}>
        {rowType === enumRowType.parent && (
          <div className={styles.btns__path_parent} />
        )}

        {rowType === enumRowType.sibling && (
          <div className={styles.btns__path_sibling} />
        )}

        <button onClick={onClickAddRow} disabled={rowIsDisabled || isNewRow}>
          <img
            src={iconFile}
            alt="Создать вложение"
            className={styles.btn__create}
          />
        </button>

        {!isNewRow && !rowIsDisabled && (
          <button disabled={rowIsDisabled} onClick={onClickDelRow}>
            <img src={iconTrash} alt="Удалить" className={styles.btn__delete} />
          </button>
        )}
      </div>
    </td>
  );
};

export default React.memo(FirstCell);
