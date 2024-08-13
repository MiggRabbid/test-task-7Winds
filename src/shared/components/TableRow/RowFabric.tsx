import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { columnMap, getParentType, isDataEmpty } from './RowFabric.services';
import { getTableData } from '../../../selectors/rowSelector';

import RowHeader from './Rows/RowHeader/RowHeader';
import RowBody from './Rows/RowBody/RowBody';

import { iResponse, iTreeResponse } from '../../../models/interface';
import { enumRowType, typeParentId } from '../../../models/types';

interface iRowFabricProps {
  rowType: enumRowType.td | enumRowType.th;
  parentId: typeParentId;
}

const RowFabric: React.FC<iRowFabricProps> = (props) => {
  const { rowType, parentId } = props;
  const rowData: iResponse = useSelector(getTableData);

  useEffect(() => {
    console.log('rowData is changed')
  }, [rowData]);

  if (rowType === enumRowType.th) {
    return <RowHeader columnMap={columnMap} />;
  }

  if (isDataEmpty(rowData)) {
    return null;
  }

  return (
    <>
      {rowData?.map((item: iTreeResponse) => {
        const parentRowType = getParentType(item);
        return (
          <RowBody
            columnMap={columnMap}
            tableData={item}
            rowType={parentRowType}
            lvl="0"
            key={item.id}
            parentId={parentId}
          />
        );
      })}
    </>
  );
};

export default RowFabric;
