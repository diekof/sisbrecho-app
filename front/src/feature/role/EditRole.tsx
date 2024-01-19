import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IRole } from '../../types/IRole';
import { StatusEnum } from '../../types/enuns/StatusEnum';
import { useGetRoleQuery, useUpdateRoleMutation } from './RoleSlice';
import CardWrapper from '../../components/CardWrapper';
import { RoleForm } from './components/RoleForm';
import { useSnackbar } from 'notistack';

export function EditRole() {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { register, reset, handleSubmit, control, setValue, watch, formState: { errors } } = useForm<IRole>({
        defaultValues: {
        }
    });
    const { data: roleQuery, isFetching } = useGetRoleQuery({ id: parseInt(id!) })
    const [updateRole, { isLoading, isSuccess, isError }] = useUpdateRoleMutation()

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Role alterado com  sucesso", { variant: "success" });
        }
    }, [isSuccess])

    useEffect(() => {
        if (roleQuery) {
            reset(roleQuery);
        }
    }, [roleQuery]);

    function onGoBack() {
        navigate(-1)
    }

    const onSubmit = (data: IRole) => updateRole(data);
    return (
        <CardWrapper title='Editar Role'>
            <RoleForm
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
