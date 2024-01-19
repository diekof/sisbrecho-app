import { IUserParams, User } from "../../types/IUser";
import { Results } from "../../types/Results";
import { apiSlice } from "../api/apiSlice";

const endpointUrl = "/usuario"


function parseQueryParams(params: IUserParams) {
    const query = new URLSearchParams();

    if (params.page) {
        query.append("page", params.page.toString());
    }

    if (params.rows) {
        query.append("size", params.rows.toString());
    }


    return query.toString();
}


function getUsers({ page = 0, rows = 10, nome = "" }) {
    const params = { page, rows, nome, isActive: true };

    return `${endpointUrl}?${parseQueryParams(params)}`;
}

export const UserApiSlice = apiSlice.injectEndpoints({
    endpoints: ({ query, mutation }) => ({
        getUsers: query<Results<User>, IUserParams>({
            query: getUsers,
        }),
    }),
})

export const { useGetUsersQuery } = UserApiSlice;