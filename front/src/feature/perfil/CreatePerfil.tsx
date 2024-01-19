import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IPerfil } from '../../types/IPerfil';
import { useCreatePerfilMutation } from './PerfilSlice';
import { useNavigate } from 'react-router-dom';
import CardWrapper from '../../components/CardWrapper';
import { PerfilForm } from './components/PerfilForm';
import { useGetListRolesQuery } from '../role/RoleSlice';

export function CreatePerfil() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<IPerfil>({
        defaultValues: {}
    });

    const [createPerfil, { isLoading, isSuccess }] = useCreatePerfilMutation()
    const { data: listRoles } = useGetListRolesQuery()
    const navigate = useNavigate()

    const onSubmit = (data: IPerfil) => createPerfil(data);

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Perfil cadastrado com  sucesso", { variant: "success" });
        }
    }, [isSuccess])

    function onGoBack() {
        navigate(-1)
    }

    return (
        <CardWrapper title='Cadastro Perfil'>
            <PerfilForm
                listRoles={listRoles || []}
                register={register}
                watch={watch}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)}
                control={control}
                isLoading={isLoading}
                onGoBack={onGoBack}
                isNew
            />
        </CardWrapper>
    )
}
