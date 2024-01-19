import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IPerfil } from '../../types/IPerfil';
import { StatusEnum } from '../../types/enuns/StatusEnum';
import { useGetPerfilQuery, useUpdatePerfilMutation } from './PerfilSlice';
import CardWrapper from '../../components/CardWrapper';
import { PerfilForm } from './components/PerfilForm';
import { useSnackbar } from 'notistack';
import { useGetListRolesQuery } from '../role/RoleSlice';
import { TabPanel, TabView } from 'primereact/tabview';
import { TabPerfilAtribuir } from './components/TabPerfilAtribuir';

export function EditPerfil() {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { register, reset, handleSubmit, control, setValue, watch, formState: { errors } } = useForm<IPerfil>({
        defaultValues: {
        }
    });
    const { data: perfilQuery, isFetching } = useGetPerfilQuery({ id: parseInt(id!) })
    const [updatePerfil, { isLoading, isSuccess, isError }] = useUpdatePerfilMutation()
    const { data: listRoles } = useGetListRolesQuery()

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Perfil alterado com  sucesso", { variant: "success" });
        }
    }, [isSuccess])

    useEffect(() => {
        if (perfilQuery) {
            reset(perfilQuery);
        }
    }, [perfilQuery]);

    function onGoBack() {
        navigate(-1)
    }

    const onSubmit = (data: IPerfil) => {
        updatePerfil({
            id: data.id,
            nome: data.nome,
            descricao: data.descricao,
            status: data.status,
            role: data.role
        });
    };

    return (
        <CardWrapper title='Editar Perfil'>
            <TabView className='col-12'>
                <TabPanel header="Dados">
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
                </TabPanel>
                <TabPanel header="Atribuir">
                    <TabPerfilAtribuir
                        perfil={perfilQuery!}
                    />
                </TabPanel>
            </TabView>

        </CardWrapper>
    )
}
