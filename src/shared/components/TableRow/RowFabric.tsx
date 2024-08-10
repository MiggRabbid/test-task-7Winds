import React from 'react';
import { iEntity, typeColumnMapType } from '../../../models/interface';
import { enumRowType, typeTableKey } from '../../../models/types';
import RowHeader from './Rows/RowHeader/RowHeader';
import RowBody from './Rows/RowBody/RowBody';

interface iRowFabricProps {
  rowType: enumRowType.td | enumRowType.th;
  rowData?: iEntity;
}

const columnMap: typeColumnMapType = new Map([
  ['child', 'Уровень'],
  ['rowName', 'Наименование работ'],
  ['salary', 'Основная з/п'],
  ['equipmentCosts', 'Оборудование'],
  ['overheads', 'Накладные расходы'],
  ['estimatedProfit', 'Сметная прибыль'],
]);

const RowFabric: React.FC<iRowFabricProps> = (props) => {
  const { rowType, rowData } = props;

  if (!rowData) return null;

  if (rowType === enumRowType.th) {
    return <RowHeader columnMap={columnMap} />;
  }

  if (rowType === enumRowType.td && !rowData) return null;

  const parentRowType = rowData.child[0] === null ? enumRowType.noChild : enumRowType.parent
  return (
      <RowBody columnMap={columnMap} tableData={rowData} rowType={parentRowType} lvl='1'/>
  );
};

export default RowFabric;
