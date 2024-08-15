import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
} from 'react';

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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const isNameInput = inputType === 'text';

  useEffect(() => {
    if (isNameInput && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const tdClass =
    (isDisabled && !isEdited) || (isDisabled && !isNewRow)
      ? styles.row__td_block
      : styles.row__td;
  const inputBlocked = !(isNewRow || isEdited);

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
      console.log(e.target);
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
      {inputBlocked && (
        <p>
          {isNameInput
            ? value
            : Intl.NumberFormat('ru-RU').format(value as number)}
        </p>
      )}

      {!inputBlocked && (
        <input
          type={inputType}
          value={value}
          onChange={handleOnChange}
          disabled={isDisabled && !(isNewRow || isEdited)}
          className={styles.td__input}
          name={controlId}
          onKeyDown={handleKeyDown}
          ref={isNameInput ? nameInputRef : null}
          autoComplete="off"
          id={`${isNewRow}`}
        />
      )}
    </td>
  );
};

export default React.memo(OtherCells);
