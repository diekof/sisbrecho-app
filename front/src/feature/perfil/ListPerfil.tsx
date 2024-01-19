import React, { useState, useEffect } from 'react'
import CardWrapper from '../../components/CardWrapper'
import { PerfilTable } from './components/PerfilTable'
import { PerfilFilter } from './components/PerfilFilter'
import { IPerfil } from '../../types/IPerfil'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_KEYS } from '../../types/enuns/LocalStorage_enum'
import { DataTableStateEvent } from 'primereact/datatable'
import { useLazyGetPerfilsQuery } from './PerfilSlice'

export function ListPerfil() {
    const navigate = useNavigate()
    const [options, setOptions] = useState({
        page: 0,
        search: "",
        rows: 10,
        rowsPerPage: [10, 20, 30],
        idenSistema: 0
    });

    const [triggerAll, { data, isFetching, isSuccess }] = useLazyGetPerfilsQuery()

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
        navigate(`/app/cadastro/perfil/new`);
    }

    function handleEdit(Perfil: IPerfil) {
        navigate(`/app/cadastro/perfil/edit/${Perfil.id}`);
    }

    function handleView(Perfil: IPerfil) {
        navigate(`/app/cadastro/perfil/view/${Perfil.id}`);
    }

    function handlePesquisar() {

    }

    async function handleDelete(Perfil: IPerfil) {
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
        <CardWrapper title='Perfil'>
            <PerfilFilter />
            <PerfilTable
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
