import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { ToggleButton } from 'primereact/togglebutton'
import { classNames } from 'primereact/utils'
import React from 'react'
import { Control, Controller, FieldErrors, FieldName, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { ButtonSalvar, ButtonVoltar } from '../../../components/ButtonComponent'
import { WrapperComLabel } from '../../../components/WrapperFormLabelInput'
import { StatusEnum, StatusEnumArray } from '../../../types/enuns/StatusEnum'
import { TipoPessoArray, TipoPessoaEnum } from '../../../types/enuns/TipoPessoaEnum'
import { InputMask } from 'primereact/inputmask'
import { Divider } from 'primereact/divider'


export interface IPessoaForm {
    id: number | null
    nome: string
    cpf: string
    nomeFantasia: string
    cnpj: string
    telefone: string
    whatsapp: string
    email: string
    isFornecedor: boolean
    tipoPessoa: TipoPessoaEnum
    status: StatusEnum
    accountNonExpired: boolean
    accountNonLocked: boolean
    credentialsNonExpired: boolean
}

interface PessoaFormProps {
    register: UseFormRegister<IPessoaForm>
    errors: FieldErrors<IPessoaForm>
    watch: UseFormWatch<IPessoaForm>
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    isView?: boolean
    isNew?: boolean
    control: Control<IPessoaForm, any>
    isLoading: boolean
    onGoBack: () => void
}

export function PessoaForm({ register, onSubmit, isView, isNew = false, watch, errors, control, isLoading, onGoBack }: PessoaFormProps) {

    const getFormErrorMessage = (name: FieldName<IPessoaForm>) => {
        return errors[name] ? <small className="p-error">{errors[name]!.message}</small> : <small className="p-error">&nbsp;</small>;
    };

    const TipoPessoa = watch('tipoPessoa');

    return (
        <form onSubmit={onSubmit} className="grid p-fluid col-12">
            <WrapperComLabel label="Tipo Pessoa:" isObrigatorio cols="12 6">
                <Controller
                    name="tipoPessoa"
                    control={control}
                    rules={{ required: 'Unidade de medida é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <Dropdown
                            disabled={!isNew}
                            id={field.name}
                            value={field.value}
                            placeholder="Selecione o tipo de pessoa"
                            options={TipoPessoArray}
                            focusInputRef={field.ref}
                            onChange={(e) => field.onChange(e.value)}
                            className={classNames({ 'p-invalid': fieldState.error })}
                        />
                    )}
                />
            </WrapperComLabel>
            <WrapperComLabel label="Nome:" isObrigatorio cols="12 6">

                <Controller
                    name="nome"
                    control={control}
                    rules={{ required: 'Nome é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <InputText
                                id={field.name}
                                placeholder='Nome'
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </WrapperComLabel>

            {TipoPessoa == TipoPessoaEnum.PESSOA_FISICA && (
                <WrapperComLabel label="CPF:" isObrigatorio cols="12 6">
                    <Controller
                        name="cpf"
                        control={control}
                        rules={{ required: 'Nome é obrigatório.' }}
                        render={({ field, fieldState }) => (
                            <>
                                <InputMask
                                    id={field.name}
                                    value={field.value}
                                    className={classNames({ 'p-invalid': fieldState.error })}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    mask="999.999.999-99"
                                    placeholder="123.321.987-01"
                                />
                                {getFormErrorMessage(field.name)}
                            </>
                        )}
                    />
                </WrapperComLabel>
            )}

            {TipoPessoa == TipoPessoaEnum.PESSOA_JURIDICA && (
                <>
                    <WrapperComLabel label="Nome Fantasia:" isObrigatorio cols="12 6">

                        <Controller
                            name="nomeFantasia"
                            control={control}
                            rules={{ required: 'Nome Fantasia é obrigatório.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <InputText
                                        id={field.name}
                                        placeholder='Nome Fantasia'
                                        value={field.value}
                                        className={classNames({ 'p-invalid': fieldState.error })}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </WrapperComLabel>
                    <WrapperComLabel label="CNPJ:" isObrigatorio cols="12 6">

                        <Controller
                            name="cnpj"
                            control={control}
                            rules={{ required: 'CNPJ é obrigatório.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <InputMask
                                        id={field.name}
                                        value={field.value}
                                        className={classNames({ 'p-invalid': fieldState.error })}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        mask="999.999.999/9999-99"
                                        placeholder='123.321.987/0004-12'
                                    />
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    </WrapperComLabel>
                </>
            )}

            <WrapperComLabel label="Telefone:" cols="12 6">
                <Controller
                    name="telefone"
                    control={control}
                    // rules={{ required: 'Telefone é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <InputMask
                                id={field.name}
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                                mask="(99) 99999-9999"
                                placeholder="21 98765-4321"
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </WrapperComLabel>
            <WrapperComLabel label="whatsapp:" cols="12 6">
                <Controller
                    name="whatsapp"
                    control={control}
                    rules={{ required: 'Whatsapp é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <InputMask
                                id={field.name}
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                                mask="(99) 99999-9999"
                                placeholder="21 98765-4321"
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </WrapperComLabel>

            <WrapperComLabel label="Email:" cols="12 6">
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <>
                            <InputText
                                id={field.name}
                                placeholder='Email'
                                value={field.value}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                            {getFormErrorMessage(field.name)}
                        </>
                    )}
                />
            </WrapperComLabel>
            <WrapperComLabel label="Status:" cols="12 6">

                <Controller
                    name="status"
                    control={control}
                    rules={{ required: 'Unidade de medida é obrigatório.' }}
                    render={({ field, fieldState }) => (
                        <Dropdown
                            id={field.name}
                            value={field.value}
                            placeholder="Selecione o status"
                            options={StatusEnumArray}
                            focusInputRef={field.ref}
                            onChange={(e) => field.onChange(e.value)}
                            className={classNames({ 'p-invalid': fieldState.error })}
                            disabled={isNew}
                        />
                    )}
                />
            </WrapperComLabel>
            {/* <WrapperComLabel label="" cols="12 ">
                <Controller
                    name="isFornecedor"
                    control={control}
                    render={({ field, fieldState }) => (
                        <div className="flex flex-column align-items-center gap-2">
                            <ToggleButton
                                id={field.name}
                                checked={field.value}
                                onChange={field.onChange}
                                className={classNames({ 'p-invalid': fieldState.error })}
                                onLabel="É um fornecedor da empresa"
                                offLabel="Não é um fornecedor da empresa"
                            />
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />
            </WrapperComLabel> */}

            {
                !isNew && (
                    <>
                        <Divider >
                            <h5>Autenticação</h5>
                        </Divider>
                        <div className='col-12 grid'>
                            <WrapperComLabel label="" cols="12 4">
                                <Controller
                                    name="accountNonExpired"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-column align-items-center ">
                                            <ToggleButton
                                                id={field.name}
                                                checked={field.value}
                                                onChange={field.onChange}
                                                className={classNames({ 'p-invalid': fieldState.error })}
                                                onLabel="Conta não expirada"
                                                offLabel="Conta expirada"
                                            />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                            </WrapperComLabel>

                            <WrapperComLabel label="" cols="12 4">
                                <Controller
                                    name="accountNonLocked"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-column align-items-center ">
                                            <ToggleButton
                                                id={field.name}
                                                checked={field.value}
                                                onChange={field.onChange}
                                                className={classNames({ 'p-invalid': fieldState.error })}
                                                onLabel="Conta não bloqueada"
                                                offLabel="Conta bloqueada"
                                            />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                            </WrapperComLabel>

                            <WrapperComLabel label="" cols="12 4">
                                <Controller
                                    name="credentialsNonExpired"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-column align-items-center ">
                                            <ToggleButton
                                                id={field.name}
                                                checked={field.value}
                                                onChange={field.onChange}
                                                className={classNames({ 'p-invalid': fieldState.error })}
                                                onLabel="Credenciais não expirada"
                                                offLabel="Credenciais expirada"
                                            />
                                            {getFormErrorMessage(field.name)}
                                        </div>
                                    )}
                                />
                            </WrapperComLabel>
                        </div>
                    </>
                )
            }
            <div className="col-12 grid">

                <div className={`col-12 md:col-6 lg:col-2 `}>
                    <ButtonVoltar onClick={onGoBack} />
                </div>

                {
                    onSubmit && !isView &&
                    <div className={`col-12 md:col-6 lg:col-2 `}  >
                        <ButtonSalvar type="submit" severity="success" label="Salvar" className="col-12" loading={isLoading} />
                    </div>
                }
            </div>
        </form>
    )
}
