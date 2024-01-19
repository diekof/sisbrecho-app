import { FetchArgs } from "@reduxjs/toolkit/dist/query";
import { IPerfil, IPerfilParams } from "../../types/IPerfil";
import { apiSlice } from "../api/apiSlice";
import { Results } from "../../types/Results";
import { IPerfilUsuario } from "../../types/IPerfilUsuario";

const endpointUrl = "/perfil"

function parseQueryParams(params: IPerfilParams) {
    const query = new URLSearchParams();

    if (params.page) {
        query.append("page", params.page.toString());
    }

    if (params.rows) {
        query.append("size", params.rows.toString());
    }

    if (params.nome) {
        query.append("nome", params.nome);
    }

    return query.toString();
}


function getPerfils({ page = 0, rows = 10, nome = "" }) {
    const params = { page, rows, nome, isActive: true };

    return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deletePerfilMutation({ id }: { id: number }): FetchArgs {
    return {
        url: `${endpointUrl}/${id}`,
        method: "DELETE",
        responseHandler: (response) => response.text(),
    };
}

function createPerfilMutation(Perfil: IPerfil) {
    return { url: endpointUrl, method: "POST", body: Perfil };
}

function atribuirPerfilMutation(Perfil: {perfilId: number, userId: number}) {
    return { 
        url: `${endpointUrl}/atribuir`,
         method: "POST", 
         body: Perfil 
        };
}

function updatePerfilMutation(Perfil: IPerfil) {
    return {
        url: `${endpointUrl}/${Perfil.id}`,
        method: "PUT",
        body: Perfil,
    };
}

function getPerfil({ id }: { id: number }) {
    return `${endpointUrl}/${id}`;
}


export const PerfilApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getPerfils: query<Results<IPerfil>, IPerfilParams>({
            query: getPerfils,
            providesTags: ["Perfil"],
        }),
        getPerfil: query<IPerfil, { id: number }>({
            query: getPerfil,
            providesTags: ["Perfil"],
        }),
        createPerfil: mutation<IPerfil, IPerfil>({
            query: createPerfilMutation,
            invalidatesTags: ["Perfil"],

        }),
        deletePerfil: mutation<string, { id: number }>({
            query: deletePerfilMutation,
            invalidatesTags: ["Perfil"],
        }),
        updatePerfil: mutation<IPerfil, IPerfil>({
            query: updatePerfilMutation,
            invalidatesTags: ["Perfil"],
        }),
        atribuirPerfil: mutation<IPerfilUsuario, {perfilId: number, userId: number}>({    
            query: atribuirPerfilMutation,
            invalidatesTags: ["PerfilUsuario"],
        }),
    })
})

export const {
    useGetPerfilsQuery,
    useLazyGetPerfilsQuery,
    useGetPerfilQuery,
    useCreatePerfilMutation,
    useUpdatePerfilMutation,
    useDeletePerfilMutation,
    useAtribuirPerfilMutation
} = PerfilApiSlice