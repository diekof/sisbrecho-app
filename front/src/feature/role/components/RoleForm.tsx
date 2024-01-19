import React from 'react'
import { IRole } from '../../../types/IRole'
import { Control, Controller, FieldErrors, FieldName, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { WrapperComLabel } from '../../../components/WrapperFormLabelInput'
import { InputText } from 'primereact/inputtext'
import classNames from 'classnames'
import { ButtonSalvar, ButtonVoltar } from '../../../components/ButtonComponent'


interface RoleFormProps {
    register: UseFormRegister<IRole>
    errors: FieldErrors<IRole>
    watch: UseFormWatch<IRole>
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    isView?: boolean
    isNew?: boolean
    control: Control<IRole, any>
    isLoading: boolean
    onGoBack: () => void
}

export function RoleForm({ register, errors, watch, onSubmit, isView, isNew, control, isLoading, onGoBack }: RoleFormProps) {

    const getFormErrorMessage = (name: FieldName<IRole>) => {
        return errors[name] ? <small className="p-error">{errors[name]!.message}</small> : <small className="p-error">&nbsp;</small>;
    };


    return (
        <form onSubmit={onSubmit} className="grid p-fluid col-12">
            <WrapperComLabel label="Nome:" isObrigatorio cols="12">

                <Controller
                    name="nomeRole"
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
            <div className='col-12 grid'>
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
