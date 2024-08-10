export interface iEntity {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: iEntity[] | [null];
}

export interface iColumnMap {
  child: 'Уровень';
  rowName: 'Наименование работ';
  salary: 'Основная з/п';
  equipmentCosts: 'Оборудование';
  overheads: 'Накладные расходы';
  estimatedProfit: 'Сметная прибыль';
}

export type typeColumnMapKey = keyof iColumnMap;
export type typeColumnMapType = Map<typeColumnMapKey, iColumnMap[typeColumnMapKey]>;