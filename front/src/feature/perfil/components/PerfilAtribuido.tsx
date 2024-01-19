import React, { useState, useEffect } from 'react'
import { useDeletePerfilUsuarioMutation, useGetPerfilUsuariosQuery } from '../PerfilUsuarioSlice'
import { IPerfil } from '../../../types/IPerfil'
import { PerfilAtribuidoTable } from './PerfilAtribuidoTable'
import { IPerfilUsuario } from '../../../types/IPerfilUsuario'
import { enqueueSnackbar } from 'notistack'

interface Props {
    perfil: IPerfil
}

export function PerfilAtribuido({ perfil }: Props) {
    const [options, setOptions] = useState({
        page: 0,
        rows: 10,
        rowsPerPage: [10, 20, 30],
        perfilId: perfil.id
    });
    const resultPerfilRole = useGetPerfilUsuariosQuery({ ...options })
    const [deletar, resultDeletar] = useDeletePerfilUsuarioMutation()

    useEffect(() => {
        if (resultDeletar.isSuccess) {
            enqueueSnackbar("Usuario removido com  sucesso do perfil", { variant: "success" });
        }
    }, [resultDeletar.isSuccess])

    function handleDelete(perfilUser: IPerfilUsuario) {
        deletar({
            id: perfilUser.id
        })
    }

    return (
        <div>
            <PerfilAtribuidoTable
                data={resultPerfilRole.data}
                rows={options.rows}
                rowsPerPage={options.rowsPerPage}
                isFetching={resultPerfilRole.isFetching}
                handleDelete={handleDelete}
            />
        </div>
    )
}
