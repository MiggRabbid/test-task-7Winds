import * as Yup from 'yup';

import {
  iOutlayRowUpdateRequest,
  iTreeResponse,
} from '../../../../../models/interface';

export function getInitialValues(data: iTreeResponse): iOutlayRowUpdateRequest {
  const { child, id, total, ...rest } = data;
  return { ...rest };
}

export const validationSchema = Yup.object({
  equipmentCosts: Yup.number().required('Equipment costs are required'),
  estimatedProfit: Yup.number().required('Estimated profit is required'),
  machineOperatorSalary: Yup.number().required(
    'Machine operator salary is required',
  ),
  mainCosts: Yup.number().required('Main costs are required'),
  materials: Yup.number().required('Materials are required'),
  mimExploitation: Yup.number().required('Mim exploitation is required'),
  overheads: Yup.number().required('Overheads are required'),
  rowName: Yup.string().required('Row name is required'),
  salary: Yup.number().required('Salary is required'),
  supportCosts: Yup.number().required('Support costs are required'),
});
