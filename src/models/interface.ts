export interface iEntity {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: iEntity[] | [];
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

export interface iOutlayRowUpdateRequest {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}

export interface iOutlayRowRequest extends iOutlayRowUpdateRequest {
  parentId: number;
}

export interface iOutlayResponse extends iOutlayRowUpdateRequest {
  parentId: number | null;
}



export interface iRowResponse extends iOutlayRowUpdateRequest {
  id: number;
  total: number;
} 

export interface iRecalculatedRows {
  changed: iRowResponse[] | null;
  current: iRowResponse | [];
}

export interface iTreeResponse extends iRowResponse {
  child: iTreeResponse[] | [];
}

export type iResponse = iTreeResponse[] | [];
