import { FetchArgs } from "@reduxjs/toolkit/dist/query";
import { IRole, IRoleParams } from "../../types/IRole";
import { apiSlice } from "../api/apiSlice";
import { Results } from "../../types/Results";

const endpointUrl = "/role"

function parseQueryParams(params: IRoleParams) {
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


function getRoles({ page = 0, rows = 10, nome = "" }) {
    const params = { page, rows, nome, isActive: true };

    return `${endpointUrl}?${parseQueryParams(params)}`;
}

function deleteRoleMutation({ id }: { id: number }): FetchArgs {
    return {
        url: `${endpointUrl}/${id}`,
        method: "DELETE",
        responseHandler: (response) => response.text(),
    };
}

function createRoleMutation(Role: IRole) {
    return { url: endpointUrl, method: "POST", body: Role };
}

function updateRoleMutation(Role: IRole) {
    return {
        url: `${endpointUrl}/${Role.id}`,
        method: "PUT",
        body: Role,
    };
}

function getRole({ id }: { id: number }) {
    return `${endpointUrl}/${id}`;
}

function getListRoles() {
    return `${endpointUrl}/list`;
}

export const RoleApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getRoles: query<Results<IRole>, IRoleParams>({
            query: getRoles,
            providesTags: ["Role"],
        }),
        getRole: query<IRole, { id: number }>({
            query: getRole,
            providesTags: ["Role"],
        }),
        getListRoles: query<IRole[], void>({
            query: getListRoles,
            providesTags: ["Role"],
        }),
        createRole: mutation<IRole, IRole>({
            query: createRoleMutation,
            invalidatesTags: ["Role"],
        }),
        deleteRole: mutation<string, { id: number }>({
            query: deleteRoleMutation,
            invalidatesTags: ["Role"],
        }),
        updateRole: mutation<IRole, IRole>({
            query: updateRoleMutation,
            invalidatesTags: ["Role"],
        }),
    })
})

export const {
    useGetRolesQuery,
    useGetListRolesQuery,
    useLazyGetRolesQuery,
    useGetRoleQuery,
    useCreateRoleMutation,
    useUpdateRoleMutation,
    useDeleteRoleMutation
} = RoleApiSlice