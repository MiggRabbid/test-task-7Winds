import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
} from 'react';

import styles from './OtherCells.module.scss';

interface iOtherCellsProps {
  inputType: 'text' | 'number';
  value: string | number;
  controlId: string;
  isDisabled: boolean;
  isEdited: boolean;
  onEditClick: () => void;
  isNewRow: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const OtherCells: React.FC<iOtherCellsProps> = ({
  inputType,
  value,
  isDisabled,
  isEdited,
  onEditClick,
  onChange,
  isNewRow,
  controlId,
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

  return (
    <td
      className={tdClass}
      onDoubleClick={!isDisabled ? onEditClick : undefined}
    >
      {inputBlocked ? (
        <p>{value}</p>
      ) : (
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={isDisabled && !isNewRow}
          className={styles.td__input}
          name={controlId}
          onKeyDown={handleKeyDown}
        />
      )}
    </td>
  );
};

export default React.memo(OtherCells, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.isDisabled === nextProps.isDisabled &&
    prevProps.isEdited === nextProps.isEdited &&
    prevProps.isNewRow === nextProps.isNewRow
  );
});
