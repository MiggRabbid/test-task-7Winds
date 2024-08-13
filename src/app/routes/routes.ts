export const BASE_URL = 'http://185.244.172.108:8081';
const API_PATH = '/v1';
const ENTITY_PATH = 'outlay-rows/entity';
const ENTITY_ID = 137679;

export default {
  getRowReqPath: () =>
    [API_PATH, ENTITY_PATH, ENTITY_ID, 'row/list'].join('/'),

  createRowReqPath: () =>
    [API_PATH, ENTITY_PATH, ENTITY_ID, 'row/create'].join('/'),
  updateRowReqPath: (rID: number) =>
    [API_PATH, ENTITY_PATH, ENTITY_ID, 'row', rID, 'update'].join('/'),
  deleteRowReqPath: (rID: number) =>
    [API_PATH, ENTITY_PATH, ENTITY_ID, 'row', rID, 'delete'].join('/'),
};
