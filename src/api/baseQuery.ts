import { fetchBaseQuery, type BaseQueryFn, type FetchArgs } from "@reduxjs/toolkit/query";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/',  
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
})

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async(args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions) 

    if (result.error && result.error.status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/signin';
    }

    return result;
}