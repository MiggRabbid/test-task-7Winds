import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { columnMap, getParentType } from './RowFabric.services';
import { getTableData } from '../../../selectors/rowSelector';

import RowHeader from './Rows/RowHeader/RowHeader';
import RowBody from './Rows/RowBody/RowBody';

import { iResponse, iTreeResponse } from '../../../models/interface';
import { enumRowType, typeParentId } from '../../../models/types';
import { getNewRow } from './Rows/RowBody/RowBody.service';

interface iRowFabricProps {
  rowType: enumRowType.td | enumRowType.th;
  parentId: typeParentId;
}

const RowFabric: React.FC<iRowFabricProps> = (props) => {
  const { rowType, parentId } = props;
  const tableData: iResponse = useSelector(getTableData);

  if (rowType === enumRowType.th) {
    return <RowHeader columnMap={columnMap} />;
  }

  if (!tableData) {
    return null;
  }

  const BASE_LVL = 0;

  if (tableData.length === 0) {
    const newRow = { ...getNewRow(), child: [], id: 0, total: 0 };
    const parentRowType = enumRowType.noChild;
    return (
      <RowBody
        columnMap={columnMap}
        tableData={newRow}
        rowType={parentRowType}
        lvl={`${BASE_LVL}`}
        key={0}
        parentId={parentId}
      />
    );
  }

  return (
    <>
      {tableData?.map((item: iTreeResponse) => {
        const parentRowType = getParentType(item);
        return (
          <RowBody
            columnMap={columnMap}
            tableData={item}
            rowType={parentRowType}
            lvl={`${BASE_LVL}`}
            key={item.id}
            parentId={parentId}
          />
        );
      })}
    </>
  );
};

export default RowFabric;
