import React from 'react'
import { IPerfil } from '../../../types/IPerfil'
import { Control, Controller, FieldErrors, FieldName, UseFormRegister, UseFormWatch, useFieldArray } from 'react-hook-form'
import { WrapperComLabel } from '../../../components/WrapperFormLabelInput'
import { InputText } from 'primereact/inputtext'
import classNames from 'classnames'
import { ButtonSalvar, ButtonVoltar } from '../../../components/ButtonComponent'
import { IRole } from '../../../types/IRole'
import { DataTable, DataTableSelectionMultipleChangeEvent } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Divider } from 'primereact/divider'


interface PerfilFormProps {
    register: UseFormRegister<IPerfil>
    errors: FieldErrors<IPerfil>
    watch: UseFormWatch<IPerfil>
    onSubmit?: React.FormEventHandler<HTMLFormElement>
    isView?: boolean
    isNew?: boolean
    control: Control<IPerfil, any>
    isLoading: boolean
    onGoBack: () => void
    listRoles: IRole[]
}

export function PerfilForm({ register, errors, watch, onSubmit, isView, isNew, control, isLoading, onGoBack, listRoles }: PerfilFormProps) {

    // const getFormErrorMessage = (name: FieldName<IPerfil>) => {
    //     return errors[name] ? <small className="p-error">{errors[name]!.message}</small> : <small className="p-error">&nbsp;</small>;
    // };

    const roleSeleted = watch('role')
    const role = useFieldArray({
        control,
        name: "role",
    })

    function onSelectionChange(e: DataTableSelectionMultipleChangeEvent<IRole[]>) {
        role.replace(e.value)
    }

    return (
        <form onSubmit={onSubmit} className="grid p-fluid col-12">
            <WrapperComLabel label="Nome:" isObrigatorio cols="12">

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
                            {/* {getFormErrorMessage(field.name)} */}
                        </>
                    )}
                />
            </WrapperComLabel>

            <Divider title='Autorizações' >
                <div className="inline-flex align-items-center">
                    <b>Autorizações</b>
                </div>
            </Divider>

            <div className='col-12'>
                <DataTable
                    value={listRoles}
                    selectionMode={'checkbox'}
                    selection={roleSeleted}
                    onSelectionChange={onSelectionChange}
                    dataKey="id"
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="nomeRole" header="Role"></Column>
                </DataTable>
            </div>

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
