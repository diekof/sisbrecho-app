import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IRole } from '../../types/IRole';
import { useCreateRoleMutation } from './RoleSlice';
import { useNavigate } from 'react-router-dom';
import CardWrapper from '../../components/CardWrapper';
import { RoleForm } from './components/RoleForm';

export function CreateRole() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<IRole>({
        defaultValues: {
        }
    });

    const [createRole, { isLoading, isSuccess }] = useCreateRoleMutation()
    const navigate = useNavigate()

    const onSubmit = (data: IRole) => {
        createRole(data);

    }

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Role cadastrado com  sucesso", { variant: "success" });
            onGoBack()
        }
    }, [isSuccess])

    function onGoBack() {
        navigate(-1)
    }

    return (
        <CardWrapper title='Cadastro Role'>
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
