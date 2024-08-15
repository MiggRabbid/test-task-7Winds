import {
  iEntity,
  iOutlayRowUpdateRequest,
  iTreeResponse,
} from '../../../../../models/interface';
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
    rowName: '',
    salary: 0,
    supportCosts: 0,
  };
}

function countNestedDescendants(nestedChild: iTreeResponse): number {
  if (nestedChild.child.length === 0) return 0;

  return nestedChild.child.reduce((acc, child) => {
    return acc + 1 + countNestedDescendants(child);
  }, 0);
}

export function countDescendants(currChild: iTreeResponse[]): number {
  if (!currChild || currChild.length === 0) {
    return 0;
  }

  const firstLevelChildren = currChild;

  let count = 0;

  for (let i = 0; i < firstLevelChildren.length - 1; i++) {
    count += 1 + countNestedDescendants(firstLevelChildren[i]);
  }

  count += firstLevelChildren.length - 1;
  return count;
}
