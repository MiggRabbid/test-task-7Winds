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
  onClickEdit: () => void;
  isParentEdited: boolean;
}

const BASE_LEFT_POSITION = 18;

const FirstCell: React.FC<iRowBodyProps> = (props) => {
  const { item, rowType, lvl, isParentEdited, onClickEdit } = props;

  const nestedLvl = lvl.split('-').length;
  const leftPosition = BASE_LEFT_POSITION * nestedLvl;

  return (
    <td className={styles.row__td_first} key={`${lvl}-${item}`}>
      <div 
        className={styles.td__btns}
        style={{ left: `${leftPosition}px` }}
      >
        {rowType === enumRowType.parent && (
          <div className={styles.btns__path_parent}></div>
        )}
        {rowType === enumRowType.sibling && (
          <div className={styles.btns__path_sibling}></div>
        )}
        <button onClick={onClickEdit} disabled={isParentEdited}>
          <img
            src={iconFile}
            alt="Создать вложение"
            className={styles.btn__create}
          />
        </button>
        <button disabled={isParentEdited}>
          <img src={iconTrash} alt="Удалить" className={styles.btn__delete} />
        </button>
      </div>
    </td>
  );
};

export default FirstCell;
