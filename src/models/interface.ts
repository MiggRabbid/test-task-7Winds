export interface iEntity {
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: iEntity[] | [null];
}