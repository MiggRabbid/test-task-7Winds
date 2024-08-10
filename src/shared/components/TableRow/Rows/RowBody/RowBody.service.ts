import { iEntity } from '../../../../../models/interface';
import { enumRowType } from '../../../../../models/types';

export const getRowType = (child: iEntity[] | [null], index: number)  => {
  if (child[0] !== null) {
    return enumRowType.parent;
  }
  if (child[0] === null && index < child.length) {
    return enumRowType.sibling;
  }
  return enumRowType.noChild;
}

export const getCurrLvl = (lvl: string, index: number) => {
  return !!lvl ? `${lvl}-${index}` : `${index}`;
}
