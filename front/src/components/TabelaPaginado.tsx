import { Button } from 'primereact/button';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { DataTable, DataTableRowClickEvent, DataTableStateEvent, DataTableValueArray } from 'primereact/datatable';
import React, { useState } from 'react'
import { Results } from '../types/Results';
import { ButtonAdicionar, ButtonIcon, ButtonPrimary, ButtonSecondary } from './ButtonComponent';
import style from './styles/TabelaPaginado.module.css'
export interface TabelaPaginadoProps<T> {
    data: Results<T> | undefined;
    rows: number;
    isFetching: boolean;
    rowsPerPage?: number[];
    columns: ColumnMeta[]
    hasEventoAcao?: boolean;

    handleOnPageChange?: (page: DataTableStateEvent) => void;
    handleFilterChange?: (filterModel: DataTableStateEvent) => void;
    handleDelete?: ((arg: T) => void) | null;
    handleEdit?: ((arg: T) => void) | null;
    handleView?: ((arg: T) => void) | null;
    handleAdicionar?: (() => void) | null;
    botoes?: (arg: T) => React.ReactNode;
};



export interface ColumnMeta {
    field?: string;
    header: string;
    body?: (data: any, options: ColumnBodyOptions) => React.ReactNode
}


export function TabelaPaginado<T>({ data, rows, isFetching, rowsPerPage, columns, hasEventoAcao, handleOnPageChange, handleFilterChange, handleDelete, handleAdicionar, handleEdit, handleView }: TabelaPaginadoProps<T>) {
    const first = data?.number && data?.size ? data?.number * data?.size : 0;
    const [visibleConfirmExcluir, setVisibleConfirmExcluir] = useState(false);
    const [selecteConfirmExclusao, setSelecteConfirmExclusao] = useState<T>();

    function renderHeader() {
        if (handleAdicionar == null || handleAdicionar == undefined) return null;
        return (
            <>
                {handleAdicionar && <ButtonAdicionar onClick={handleAdicionar} />}
            </>
        )
    }

    const onExcluir = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowData: T) => {
        event.preventDefault();
        setSelecteConfirmExclusao(rowData);
        setVisibleConfirmExcluir(true);
    };

    const confirmarExclucao = () => {
        setVisibleConfirmExcluir(false);
        handleDelete && handleDelete(selecteConfirmExclusao as T);
    };

    const actionBotoes = (rowData: T) => {
        return (
            <div className={style.compTableDivButtons}>
                {handleView && <ButtonIcon type="button" tooltip="Visualizar" icon="pi pi-eye" onClick={() => handleView(rowData)} />}
                {handleEdit && <ButtonIcon severity="warning" type="button" tooltip="Editar" icon="pi pi-pencil" onClick={() => handleEdit(rowData)} />}
                {handleDelete && <ButtonIcon severity="danger" type="button" tooltip="Excluir" icon="pi pi-trash" onClick={(e) => onExcluir(e, rowData)} />}
            </div>
        );
    };

    function onEdit(parm: DataTableRowClickEvent) {
        handleEdit && handleEdit(parm.data as T);
    }

    const renderFooter = () => {
        return (
            <div>
                <ButtonPrimary
                    label="Sim"
                    type="button"
                    icon="pi pi-check"
                    iconPos="left"
                    onClick={confirmarExclucao}
                />

                <ButtonSecondary
                    label="Não"
                    type="button"
                    icon="pi pi-times"
                    iconPos="left"
                    onClick={() => setVisibleConfirmExcluir(false)}
                />
            </div>
        );
    };
    return (
        <div>
            <DataTable
                value={data?.content as DataTableValueArray}
                totalRecords={data?.totalElements}
                tableStyle={{ minWidth: '50rem' }}
                rowsPerPageOptions={rowsPerPage}
                loading={isFetching}
                rows={rows}
                paginator
                lazy
                first={first}
                showGridlines
                onPage={handleOnPageChange}
                onFilter={handleFilterChange}
                header={renderHeader()}
                onRowClick={onEdit}
                selectionMode="single"
                metaKeySelection={true}
            >
                {columns.map((col, i) => (<Column key={col.field} field={col.field} header={col.header} body={col.body} />))}
                {hasEventoAcao && <Column header={"Ações"} body={actionBotoes} />}
            </DataTable>
            <Dialog
                header="Confirmação"
                visible={visibleConfirmExcluir}
                footer={renderFooter()}
                onHide={() => setVisibleConfirmExcluir(false)}
                id="confirm_exclusao"
            >
                <p>Deseja realmente remover o registro selecionado? </p>
            </Dialog>
        </div>
    )
}
