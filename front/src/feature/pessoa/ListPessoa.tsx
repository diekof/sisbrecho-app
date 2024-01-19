import React, { useState, useEffect } from 'react'
import CardWrapper from '../../components/CardWrapper'
import { PessoaTable } from './components/PessoaTable'
import { PessoaFilter } from './components/PessoaFilter'
import { IPessoa } from '../../types/IPessoa'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_KEYS } from '../../types/enuns/LocalStorage_enum'
import { DataTableStateEvent } from 'primereact/datatable'
import { useLazyGetPessoasQuery } from './PessoaSlice'

export function ListPessoa() {
    const navigate = useNavigate()
    const [options, setOptions] = useState({
        page: 0,
        search: "",
        rows: 10,
        rowsPerPage: [10, 20, 30],
        idenSistema: 0
    });

    const [triggerAll, { data, isFetching, isSuccess }] = useLazyGetPessoasQuery()

    useEffect(() => {
        let optionsLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.FILTER_TELA_CAD_PESSOA)
        if (optionsLocalStorage) {
            let optionsJson = JSON.parse(optionsLocalStorage)
            setOptions(optionsJson)

        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.FILTER_TELA_CAD_PESSOA, JSON.stringify(options))
        }
    }, [data, options])

    useEffect(() => {

        triggerAll({
            ...options,
        })

    }, [options])

    function handleAdicionar() {
        navigate(`/app/cadastro/pessoa/new`);
    }

    function handleEdit(pessoa: IPessoa) {
        navigate(`/app/cadastro/pessoa/edit/${pessoa.id}`);
    }

    function handleView(pessoa: IPessoa) {
        navigate(`/app/cadastro/pessoa/view/${pessoa.id}`);
    }

    function handlePesquisar() {

    }

    async function handleDelete(pessoa: IPessoa) {
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
        <CardWrapper title='Pessoa'>
            <PessoaFilter />
            <PessoaTable
                data={data}
                isFetching={isFetching}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleView={handleView}
                handleFilterChange={handleFilterChange}
                handleOnPageChange={handleOnPageChange}
                handleAdicionar={handleAdicionar}
                rows={options.rows}
                rowsPerPage={options.rowsPerPage}
            />
        </CardWrapper>
    )
}
