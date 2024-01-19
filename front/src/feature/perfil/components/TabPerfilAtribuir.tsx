import React from 'react'
import { IPerfil } from '../../../types/IPerfil'
import { useGetPerfilUsuariosQuery } from '../PerfilUsuarioSlice'
import { PerfilAtribuido } from './PerfilAtribuido'
import { PerfilAtribuir } from './PerfilAtribuir'

interface Props {
    perfil: IPerfil
}
export function TabPerfilAtribuir({ perfil }: Props) {


    return (
        <div className='grid'>

            <div className='col-12 md:col-6'>
                <PerfilAtribuir perfil={perfil} />
            </div>

            <div className='col-12 md:col-6'>
                <PerfilAtribuido perfil={perfil} />
            </div>
        </div>
    )
}
