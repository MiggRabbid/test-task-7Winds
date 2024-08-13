import React, { ChangeEvent, KeyboardEvent, useCallback } from 'react';

import styles from './OtherCells.module.scss';

interface iOtherCellsProps {
  id: string;
  controlId: string;
  inputType: 'text' | 'number';
  value: string | number;
  isDisabled: boolean;
  isEdited: boolean;
  isNewRow: boolean;
  onEditClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const OtherCells: React.FC<iOtherCellsProps> = ({
  id,
  controlId,
  inputType,
  value,
  isDisabled,
  isEdited,
  isNewRow,
  onEditClick,
  onChange,
  onSubmit,
  onCancel,
}) => {
  const tdClass = isDisabled ? styles.row__td_block : styles.row__td;
  const inputBlocked = (!isEdited && !isNewRow) || (isDisabled && !isNewRow);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSubmit();
      } else if (e.key === 'Escape') {
        onCancel();
      }
    },
    [onSubmit, onCancel],
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    },
    [onChange],
  );

  return (
    <td
      className={tdClass}
      onDoubleClick={!isDisabled ? onEditClick : undefined}
      id={id}
    >
      {inputBlocked ? (
        <p>{value}</p>
      ) : (
        <input
          type={inputType}
          value={value}
          onChange={handleOnChange}
          disabled={isDisabled && !isNewRow}
          className={styles.td__input}
          name={controlId}
          onKeyDown={handleKeyDown}
        />
      )}
    </td>
  );
};

export default React.memo(OtherCells);
