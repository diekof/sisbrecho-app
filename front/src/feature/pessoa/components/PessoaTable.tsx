import React from 'react'
import { ColumnMeta, TabelaPaginado } from '../../../components/TabelaPaginado'
import { Results } from '../../../types/Results';
import { DataTableStateEvent } from 'primereact/datatable';
import { IPessoa } from '../../../types/IPessoa';


type Props = {
    data: Results<IPessoa> | undefined;
    rows: number;
    rowsPerPage: number[];
    isFetching: boolean;

    handleOnPageChange: (page: DataTableStateEvent) => void;
    handleFilterChange: (filterModel: DataTableStateEvent) => void;
    handleDelete?: ((arg: IPessoa) => void) | null;
    handleEdit: ((arg: IPessoa) => void) | null;
    handleView: ((arg: IPessoa) => void) | null;
    handleAdicionar?: (() => void) | null;
};

export function PessoaTable({
    data,
    rows,
    rowsPerPage,
    isFetching,
    handleOnPageChange,
    handleFilterChange,
    handleDelete,
    handleEdit,
    handleView,
    handleAdicionar
}: Props) {
    const columns: ColumnMeta[] = [
        { field: 'nome', header: 'Nome' },
        { field: 'email', header: 'E-mail' }
    ];
    return (
        <div className="col-12">
            <TabelaPaginado<IPessoa>
                data={data}
                columns={columns}
                isFetching={isFetching}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleView={handleView}
                handleFilterChange={handleFilterChange}
                handleOnPageChange={handleOnPageChange}
                rows={rows}
                rowsPerPage={rowsPerPage}
                handleAdicionar={handleAdicionar}
                hasEventoAcao
            />
        </div>
    )
}
