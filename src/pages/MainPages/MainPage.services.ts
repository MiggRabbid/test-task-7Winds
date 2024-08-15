import { iResponse, iTreeResponse } from '../../models/interface';

export function getSortedTableData(tableData: iResponse): iResponse {
  const sortById = (data: iTreeResponse[]): iTreeResponse[] => {
    return data
      .map((item) => ({
        ...item,
        child: sortById(item.child),
      }))
      .sort((a, b) => a.id - b.id);
  };

  return sortById(tableData as iTreeResponse[]);
}
