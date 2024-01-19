import React, { useEffect, useState } from 'react'
import { IPerfil } from '../../../types/IPerfil'
import { PerfilAtribuirTable } from './PerfilAtribuirTable'
import { useCreatePerfilUsuarioMutation } from '../PerfilUsuarioSlice'
import { User } from '../../../types/IUser'
import { useAtribuirPerfilMutation } from '../PerfilSlice'
import { useGetUsersQuery } from '../../pessoa/UserSlice'
import { enqueueSnackbar } from 'notistack'

interface Props {
    perfil: IPerfil
}

export function PerfilAtribuir({ perfil }: Props) {
    const [options, setOptions] = useState({
        page: 0,
        rows: 10,
        rowsPerPage: [10, 20, 30],
    });

    const resultUser = useGetUsersQuery({ ...options })
    const [atribuirPerfil, resultAtribuirPerfil] = useAtribuirPerfilMutation()

    useEffect(() => {
        if (resultAtribuirPerfil.isSuccess) {
            enqueueSnackbar("Usuario atribuido no perfil", { variant: "success" });
        }
    }, [resultAtribuirPerfil.isSuccess])

    function handleAtribuir(user: User) {
        atribuirPerfil({
            perfilId: perfil.id,
            userId: user.userId
        })
    }

    return (
        <div>
            <PerfilAtribuirTable
                data={resultUser.data}
                rows={options.rows}
                rowsPerPage={options.rowsPerPage}
                isFetching={resultUser.isFetching}
                handleAtribuir={handleAtribuir}
            />
        </div>
    )
}
