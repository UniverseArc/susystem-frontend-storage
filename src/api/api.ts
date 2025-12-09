import { createApi } from '@reduxjs/toolkit/query/react'
import type { ILoginArgs, ILoginResponce, ISendEmailMessageDto, ITicket, ITicketDetail, Workspaces } from './api.types';
import { baseQueryWithReauth } from './baseQuery';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Tickets', 'Workspaces'],
  endpoints: (build) => ({
    login: build.mutation<ILoginResponce, ILoginArgs>({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),
    getTickets: build.query<
      ITicket[],
      { filter?: string[]; workspaceId?: number } | void
    >({
      query: (params) => {
        const search = new URLSearchParams();

        if (params?.filter?.length) {
          search.append("filter", params.filter.join(","));
        }
        if (params?.workspaceId) {
          search.append("workspaceId", String(params.workspaceId));
        }

        return {
          url: `tickets?${search.toString()}`,
          method: "GET",
        };
      },

      providesTags: (result) =>
        result
          ? [{ type: "Tickets", id: "LIST" }] 
          : [{ type: "Tickets", id: "LIST" }],
    }),
    getTicketById: build.query<ITicketDetail, number>({
      query: (ticketId) => ({ url: `tickets/${ticketId}`, method: 'GET' }),
    }),
    sendTicketMessage: build.mutation<void, { ticketId: number; message: ISendEmailMessageDto }>({
      query: ({ ticketId, message }) => ({
        url: `tickets/${ticketId}/send-message`,
        method: 'POST',
        body: message,
      }),
    }),
    takeTicketToWork: build.mutation<void, number>({
      query: (ticketId) => ({
        url: `tickets/${ticketId}/take-to-work`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Tickets', id: 'LIST' }], // обновляет список
    }),

    closeTicket: build.mutation<void, number>({
      query: (ticketId) => ({
        url: `tickets/${ticketId}/close`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Tickets', id: 'LIST' }], // обновляет список
    }),
    getWorkspaces: build.query<Workspaces[], void>({
      query: () => 'workspaces',
      providesTags: [{ type: 'Workspaces', id: 'LIST' }],
    }),
    createWorkspace: build.mutation<
      void, // сервер просто возвращает 200
      { name: string } // тело запроса
    >({
      query: (body) => ({
        url: `workspaces`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Workspaces', id: 'LIST' }], // обновит список после создания
    }),
  }),
})

export const {
  useLoginMutation,
  useGetTicketsQuery,
  useGetTicketByIdQuery,
  useSendTicketMessageMutation,
  useTakeTicketToWorkMutation,
  useCloseTicketMutation,
  useGetWorkspacesQuery,
  useCreateWorkspaceMutation,
} = api