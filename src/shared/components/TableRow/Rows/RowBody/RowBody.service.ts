import { iEntity, iOutlayRowUpdateRequest } from '../../../../../models/interface';
import { enumRowType } from '../../../../../models/types';

export function getRowType(
  child: iEntity[] | [null],
  index: number,
  numberChildren: number,
) {
  if (child.length > 0) {
    return enumRowType.parent;
  }

  if (child.length === 0 && index < numberChildren - 1) {
    return enumRowType.sibling;
  }

  return enumRowType.noChild;
}

export function getCurrLvl(lvl: string, index: number) {
  return !!lvl ? `${lvl}-${index}` : `${index}`;
}

export function getNewRow(): iOutlayRowUpdateRequest {
  return {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: 'newRow',
    salary: 0,
    supportCosts: 0,
  };
}
