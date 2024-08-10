import { iEntity } from '../models/interface';

const tableData: iEntity = {
  rowName: 'Южная строительная площадка',
  salary: 20348,
  equipmentCosts: 1750,
  overheads: 108.07,
  estimatedProfit: 1209122.5,
  child: [
    {
      rowName: 'Фундаментальные работы',
      salary: 20348,
      equipmentCosts: 1750,
      overheads: 108.07,
      estimatedProfit: 1209122.5,
      child: [
        {
          rowName: 'Статья работы № 1',
          salary: 20348,
          equipmentCosts: 1750,
          overheads: 108.07,
          estimatedProfit: 189122.5,
          child: [null],
        },
        {
          rowName: 'Статья работы № 2',
          salary: 38200,
          equipmentCosts: 1200,
          overheads: 850,
          estimatedProfit: 1020000,
          child: [null],
        },
      ],
    },
  ],
};

export default tableData;
