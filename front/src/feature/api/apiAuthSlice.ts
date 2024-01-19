import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";
import { baseQueryWithReauthFn } from "./baseQueryWithReauth";

export const BASE_URL_AUTH = import.meta.env.VITE_BASE_URL_AUTH;


const baseQueryFn = (baseUrl= BASE_URL_AUTH) =>  fetchBaseQuery({
    baseUrl:BASE_URL_AUTH,
    prepareHeaders: (headers, { getState,extra }) => {
        let _extra: any = extra
        const token = (getState() as RootState).auth.token?.access_token
        if (_extra && _extra['isRefreshToken']) {
            return headers
          }
      
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

  
export const apiAuthSlice = createApi({
    reducerPath: "apiAuth",
    endpoints: (builder) => ({}),    
    baseQuery:baseQueryWithReauthFn(baseQueryFn),
});
