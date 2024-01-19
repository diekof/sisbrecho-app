import React, { useState, useEffect } from 'react'
import CardWrapper from '../../components/CardWrapper'
import { RoleTable } from './components/RoleTable'
import { RoleFilter } from './components/RoleFilter'
import { IRole } from '../../types/IRole'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_KEYS } from '../../types/enuns/LocalStorage_enum'
import { DataTableStateEvent } from 'primereact/datatable'
import { useDeleteRoleMutation, useLazyGetRolesQuery } from './RoleSlice'
import { useSnackbar } from 'notistack'

export function ListRole() {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [options, setOptions] = useState({
        page: 0,
        search: "",
        rows: 10,
        rowsPerPage: [10, 20, 30],
        idenSistema: 0
    });

    const [triggerAll, { data, isFetching, isSuccess }] = useLazyGetRolesQuery()
    const [deleteRole, resultDeleteRole] = useDeleteRoleMutation()

    useEffect(() => {
        if (resultDeleteRole.isSuccess) {
            enqueueSnackbar("Role deletado com  sucesso", { variant: "success" });
        }
    }, [resultDeleteRole.isSuccess])

    useEffect(() => {
        let optionsLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.FILTER_TELA_CAD_ROLE)
        if (optionsLocalStorage) {
            let optionsJson = JSON.parse(optionsLocalStorage)
            setOptions(optionsJson)
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.FILTER_TELA_CAD_ROLE, JSON.stringify(options))
        }
    }, [data, options])

    useEffect(() => {

        triggerAll({
            ...options,
        })

    }, [options])

    function handleAdicionar() {
        navigate(`/app/cadastro/role/new`);
    }

    function handleEdit(Role: IRole) {
        navigate(`/app/cadastro/role/edit/${Role.id}`);
    }

    function handleView(Role: IRole) {
        navigate(`/app/cadastro/role/view/${Role.id}`);
    }

    function handlePesquisar() {

    }

    async function handleDelete(Role: IRole) {
        deleteRole({
            id: Role.id
        })
    }

    function handleFilterChange(filterModel: DataTableStateEvent) {
    }

    function handleOnPageChange(page: DataTableStateEvent) {

        setOptions({
            ...options,
            page: page.page ? page.page : 0,
            rows: page.rows ? page.rows : 5,
        });
    }
    return (
        <CardWrapper title='Role'>
            <RoleFilter />
            <RoleTable
                data={data}
                isFetching={isFetching}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                // handleView={handleView}
                handleFilterChange={handleFilterChange}
                handleOnPageChange={handleOnPageChange}
                handleAdicionar={handleAdicionar}
                rows={options.rows}
                rowsPerPage={options.rowsPerPage}
            />
        </CardWrapper>
    )
}
