import { iResponse, iTreeResponse, typeColumnMapType } from '../../../models/interface';
import { enumRowType } from '../../../models/types';

export function getParentType(rowData: iTreeResponse): enumRowType {
  return rowData.child.length === 0 ? enumRowType.noChild : enumRowType.parent;
}

export function isDataEmpty(data?: iResponse | [] | undefined): boolean {
  return !data || data.length === 0;
}

export const columnMap: typeColumnMapType = new Map([
  ['child', 'Уровень'],
  ['rowName', 'Наименование работ'],
  ['salary', 'Основная з/п'],
  ['equipmentCosts', 'Оборудование'],
  ['overheads', 'Накладные расходы'],
  ['estimatedProfit', 'Сметная прибыль'],
]);