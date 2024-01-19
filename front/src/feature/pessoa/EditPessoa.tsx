import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IPessoa } from '../../types/IPessoa';
import { TipoPessoaEnum } from '../../types/enuns/TipoPessoaEnum';
import { StatusEnum } from '../../types/enuns/StatusEnum';
import { useGetPessoaQuery, useUpdatePessoaMutation } from './PessoaSlice';
import CardWrapper from '../../components/CardWrapper';
import { IPessoaForm, PessoaForm } from './components/PessoaForm';
import { useSnackbar } from 'notistack';

export function EditPessoa() {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const { register, handleSubmit, control, setValue, reset, watch, formState: { errors } } = useForm<IPessoaForm>({
        defaultValues: {
            tipoPessoa: TipoPessoaEnum.PESSOA_FISICA,
            status: StatusEnum.ATIVO
        }
    });

    const { data: pessoaQuery, isFetching } = useGetPessoaQuery({ id: parseInt(id!) })
    const [updatePessoa, { isLoading, isSuccess, isError }] = useUpdatePessoaMutation()

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Pessoa alterado com  sucesso", { variant: "success" });
        }
    }, [isSuccess])

    useEffect(() => {
        if (pessoaQuery) {
            reset(pessoaQuery)
        }
    }, [pessoaQuery]);

    function onGoBack() {
        navigate(-1)
    }

    const onSubmit = (data: IPessoa) => updatePessoa(data);
    return (
        <CardWrapper title='Editar Pessoa'>
            <PessoaForm
                register={register}
                watch={watch}
                errors={errors}
                onSubmit={handleSubmit(onSubmit)}
                control={control}
                isLoading={isLoading}
                onGoBack={onGoBack}
            />
        </CardWrapper>
    )
}
