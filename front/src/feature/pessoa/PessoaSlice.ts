import { FetchArgs } from "@reduxjs/toolkit/dist/query";
import { IPessoa, IPessoaParams, IPessoaResponseGetId } from "../../types/IPessoa";
import { Results } from "../../types/Results";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/pessoa"

function parseQueryParams(params: IPessoaParams) {
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

function getPessoas({ page = 0, rows = 10, nome = "" }) {
    const params = { page, rows, nome, isActive: true };

    return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deletePessoaMutation({ id }: { id: number }): FetchArgs {
    return {
        url: `${endpointUrl}/${id}`,
        method: "DELETE",
        responseHandler: (response) => response.text(),
    };
}

function createPessoaMutation(pessoa: IPessoa) {
    return { url: endpointUrl, method: "POST", body: pessoa };
}

function updatePessoaMutation(pessoa: IPessoa) {
    return {
        url: `${endpointUrl}/${pessoa.id}`,
        method: "PUT",
        body: pessoa,
    };
}

function getPessoa({ id }: { id: number }) {
    return `${endpointUrl}/${id}`;
}


export const PessoaApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getPessoas: query<Results<IPessoa>, IPessoaParams>({
            query: getPessoas,
            providesTags: ["Pessoa"],
        }),
        getPessoa: query<IPessoaResponseGetId, { id: number }>({
            query: getPessoa,
            providesTags: ["Pessoa"],
        }),
        createPessoa: mutation<IPessoa, IPessoa>({
            query: createPessoaMutation,
            invalidatesTags: ["Pessoa"],

        }),
        deletePessoa: mutation<string, { id: number }>({
            query: deletePessoaMutation,
            invalidatesTags: ["Pessoa"],
        }),
        updatePessoa: mutation<IPessoa, IPessoa>({
            query: updatePessoaMutation,
            invalidatesTags: ["Pessoa"],
        }),
    })
})

export const {
    useGetPessoasQuery,
    useLazyGetPessoasQuery,
    useGetPessoaQuery,
    useCreatePessoaMutation,
    useUpdatePessoaMutation,
    useDeletePessoaMutation
} = PessoaApiSlice
