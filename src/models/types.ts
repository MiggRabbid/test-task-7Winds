export type typeTableKey = [
  'child',
  'rowName',
  'salary',
  'equipmentCosts',
  'overheads',
  'estimatedProfit',
];

export type typeTbKey = 'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit' | 'child';


export enum enumRowType {
  th = 'th',
  td = 'td',
}

export  enum enumRowType {
  parent = 'parent',
  noChild = 'noChild',
  sibling = 'sibling',
}

export type typeParentId = number | null;