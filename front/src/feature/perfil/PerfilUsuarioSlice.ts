import { IPerfilUsuario, IPerfilUsuarioParams } from "../../types/IPerfilUsuario";
import { Results } from "../../types/Results";
import { apiSlice } from "../api/apiSlice";


function parseQueryParams(params: IPerfilUsuarioParams) {
    const query = new URLSearchParams();

    if (params.page) {
        query.append("page", params.page.toString());
    }

    if (params.rows) {
        query.append("size", params.rows.toString());
    }

    return query.toString();
}


export const PerfilUsuarioApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getPerfilUsuarios: query<Results<IPerfilUsuario>, IPerfilUsuarioParams>({
            query: (params:IPerfilUsuarioParams) => `/perfilUsuario/${params.perfilId}?${parseQueryParams(params)}`,
            providesTags: ["PerfilUsuario"]
        }),
        createPerfilUsuario: mutation<IPerfilUsuario,IPerfilUsuario>({
            query: (perfilUsuario) => ({
                url: "/perfilUsuario",
                method: "POST",
                body: perfilUsuario,
            }),
            invalidatesTags: ["PerfilUsuario"],

        }),
        deletePerfilUsuario: mutation<void,{id:number}>({
            query: ({ id }) => ({
                url: `/perfilUsuario/${id}`,
                method: "DELETE",
                responseHandler: (response) => response.text(),
            }),
            invalidatesTags: ["PerfilUsuario"],
        }),
    }),
})

export const {
    useGetPerfilUsuariosQuery,
    useLazyGetPerfilUsuariosQuery,
    useCreatePerfilUsuarioMutation,
    useDeletePerfilUsuarioMutation,
} = PerfilUsuarioApiSlice;