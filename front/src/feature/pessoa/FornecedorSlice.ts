import { IFornecedor } from "../../types/IFornecedor"
import { Results } from "../../types/Results"
import { apiSlice } from "../api/apiSlice"

const endpointUrl = "/fornecedor"

function getListFornecedorAtivos() {
    return `${endpointUrl}/ativos`;
}

export const FornecedorApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getListFornecedorAtivos: query<IFornecedor[], void>({
            query: getListFornecedorAtivos,
            providesTags: ["Fornecedor"],
        }),

    })
})

export const {
    useGetListFornecedorAtivosQuery
} = FornecedorApiSlice