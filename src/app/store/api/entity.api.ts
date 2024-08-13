import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import routes, { BASE_URL } from '../../routes/routes';

import { iOutlayResponse, iResponse } from '../../../models/interface';

const { getRowReqPath, createRowReqPath, updateRowReqPath, deleteRowReqPath } = routes;

interface iRequestCreateRows {
  body: iOutlayResponse;
}

interface iRequestUpdateRows extends iRequestCreateRows {
  params: { rid: number };
}

interface iRequestDeleteRows {
  params: { rid: number };
}

const entityApi = createApi({
  reducerPath: 'entityApiReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['outlay'],
  endpoints: (build) => ({
    getAllRow: build.query<iResponse, void>({
      query: () => ({
        url: getRowReqPath(),
      }),
      providesTags: ['outlay'],
    }),
    createRow: build.mutation<iOutlayResponse, iRequestCreateRows>({
      query: (request) => ({
        url: createRowReqPath(),
        method: 'POST',
        body: request.body,
      }),
      invalidatesTags: ['outlay'],
    }),
    updateRow: build.mutation<iOutlayResponse, iRequestUpdateRows>({
      query: (request) => ({
        url: updateRowReqPath(request.params.rid),
        method: 'POST',
        body: request.body,
      }),
      invalidatesTags: ['outlay'],
    }),
    deleteRow: build.mutation<iOutlayResponse, iRequestDeleteRows>({
      query: (request) => ({
        url: deleteRowReqPath(request.params.rid),
        method: 'DELETE',
      }),
      invalidatesTags: ['outlay'],
    }),
  }),
});

export const { useGetAllRowQuery, useCreateRowMutation, useUpdateRowMutation, useDeleteRowMutation } =
  entityApi;

export default entityApi;
