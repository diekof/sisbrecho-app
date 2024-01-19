import React, { useEffect } from 'react'
import { IPessoa } from '../../types/IPessoa';
import { useForm } from 'react-hook-form';
import { useCreatePessoaMutation } from './PessoaSlice';
import { useNavigate } from 'react-router-dom';
import { IPessoaForm, PessoaForm } from './components/PessoaForm';
import CardWrapper from '../../components/CardWrapper';
import { TipoPessoaEnum } from '../../types/enuns/TipoPessoaEnum';
import { StatusEnum } from '../../types/enuns/StatusEnum';
import { useSnackbar } from 'notistack';

export function CreatePessoa() {
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<IPessoaForm>({
        defaultValues: {
            tipoPessoa: TipoPessoaEnum.PESSOA_FISICA,
            status: StatusEnum.ATIVO
        }
    });

    const [createPessoa, { isLoading, isSuccess }] = useCreatePessoaMutation()
    const navigate = useNavigate()

    const onSubmit = (data: IPessoaForm) => createPessoa(data);

    useEffect(() => {
        if (isSuccess) {
            enqueueSnackbar("Pessoa cadastrado com  sucesso", { variant: "success" });
        }
    }, [isSuccess])

    function onGoBack() {
        navigate(-1)
    }
    return (
        <CardWrapper title='Cadastro Pessoa'>
            <PessoaForm
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
