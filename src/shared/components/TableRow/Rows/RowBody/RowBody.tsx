import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import styles from './RowBody.module.scss';

import { getCurrLvl, getNewRow, getRowType } from './RowBody.service';
import { getInitialValues, validationSchema } from './RowBody.config';
import { getEditState } from '../../../../../selectors/rowSelector';
import useActions from '../../../../../hooks/useActions';
import {
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} from '../../../../../app/store/api/entity.api';

import FirstCell from '../../Cells/FirstCell';
import OtherCells from '../../Cells/OtherCells';

import { enumRowType, typeParentId } from '../../../../../models/types';
import {
  iTreeResponse,
  typeColumnMapKey,
  typeColumnMapType,
} from '../../../../../models/interface';

interface iRowBodyProps {
  columnMap: typeColumnMapType;
  tableData: iTreeResponse | undefined;
  rowType?: enumRowType;
  lvl: string;
  parentId: typeParentId;
}

const RowBody: React.FC<iRowBodyProps> = (props) => {
  const { columnMap, tableData, rowType, lvl, parentId } = props;

  if (!tableData) return null;

  const [createRow] = useCreateRowMutation();
  const [updateRow] = useUpdateRowMutation();
  const [deleteRow] = useDeleteRowMutation();

  const { openEdit, closedEdit } = useActions();
  const rowIsDisabled = useSelector(getEditState);

  const [isEdited, setIsEdited] = useState(false);
  const [currChild, setCurrChild] = useState<iTreeResponse[]>(tableData.child);

  const isNewRow = tableData.id === 0;
  const rowClass =
    rowIsDisabled && !isNewRow && !isEdited ? styles.row_block : styles.row;

  useEffect(() => {
    setCurrChild(tableData.child);
  }, [tableData]);

  const handleClickAddRow = () => {
    const newRow = { ...getNewRow(), child: [], id: 0, total: 0 };
    setCurrChild((prevState) => [...prevState, newRow]);
    openEdit();
  };

  const handleClickIsEdited = () => {
    setIsEdited(true);
    openEdit();
  };

  const handleClickCancel = () => {
    setIsEdited(false);
    closedEdit();
  };

  const formik = useFormik({
    initialValues: getInitialValues(tableData),
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        if (isNewRow) {
          const body = { ...values, parentId: parentId || null };
          await createRow({ body });
        }
        if (!isNewRow) {
          const body = { ...values, parentId: parentId || null };
          const params = { rid: tableData.id };
          await updateRow({ body, params });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsEdited(false);
        closedEdit();
      }

      setSubmitting(false);
    },
  });

  return (
    <>
      <tr className={rowClass} key={lvl} id={`row-${lvl}`}>
        {Array.from(columnMap.keys()).map((item: typeColumnMapKey) => {
          const uniqKey = `${tableData.id}-${item}`;

          if (item === 'child') {
            return (
              <FirstCell
                key={uniqKey}
                lvl={lvl}
                id={uniqKey}
                item={item}
                rowType={rowType}
                isNewRow={isNewRow}
                rowIsDisabled={rowIsDisabled}
                onClickAddRow={handleClickAddRow}
                onClickDelRow={() =>
                  deleteRow({ params: { rid: tableData.id } })
                }
              />
            );
          }

          return (
            <OtherCells
              key={uniqKey}
              id={uniqKey}
              controlId={item}
              inputType={item === 'rowName' ? 'text' : 'number'}
              value={formik.values[item]}
              isDisabled={rowIsDisabled}
              isEdited={isEdited}
              isNewRow={isNewRow}
              onEditClick={handleClickIsEdited}
              onChange={formik.handleChange}
              onSubmit={formik.handleSubmit}
              onCancel={handleClickCancel}
            />
          );
        })}
      </tr>
      {currChild
        .filter(Boolean)
        .map((nestedData: iTreeResponse | null, index: number) => {
          if (nestedData === null) return null;

          const numberChildren = currChild.length;
          const currLvl = getCurrLvl(lvl, index);
          const rowType = getRowType(nestedData.child, index, numberChildren);

          return (
            <RowBody
              key={nestedData.id}
              lvl={currLvl}
              columnMap={columnMap}
              tableData={nestedData}
              rowType={rowType}
              parentId={tableData.id}
            />
          );
        })}
    </>
  );
};

export default React.memo(RowBody);
