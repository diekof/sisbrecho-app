import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauthFn } from "./baseQueryWithReauth";
import { RootState } from "../../app/store";
// import { keycloak } from "../../keycloakConfig";

export const BASE_URL_SETLLATO = import.meta.env.VITE_BASE_URL;
const publicos = ["getVersao"]

const baseQueryFn = (baseUrl= BASE_URL_SETLLATO) => fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers: Headers, { getState, endpoint, extra }) => {
      let _extra: any = extra
  
      if (_extra && _extra['isRefreshToken']) {
        return headers
      }
  
      const token = (getState() as RootState).auth.token!.access_token
      const isPublic = !!publicos.find((e) => e == endpoint)
      if (token && !isPublic) {
        headers.set('authorization', `Bearer ${token}`)
      }
      
      return headers
    },
  
  })
  

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: [
    "Pessoa", 
    "Role", 
    "Perfil",
    "PerfilUsuario"
  ],
    endpoints: (builder) => ({}),
    baseQuery: baseQueryWithReauthFn(baseQueryFn),
});
