import React from 'react'
import { ColumnMeta, TabelaPaginado } from '../../../components/TabelaPaginado'
import { Results } from '../../../types/Results';
import { DataTableStateEvent } from 'primereact/datatable';
import { IPerfil } from '../../../types/IPerfil';


type Props = {
    data: Results<IPerfil> | undefined;
    rows: number;
    rowsPerPage: number[];
    isFetching: boolean;

    handleOnPageChange: (page: DataTableStateEvent) => void;
    handleFilterChange: (filterModel: DataTableStateEvent) => void;
    handleDelete?: ((arg: IPerfil) => void) | null;
    handleEdit: ((arg: IPerfil) => void) | null;
    handleView?: ((arg: IPerfil) => void) | null;
    handleAdicionar?: (() => void) | null;
};

export function PerfilTable({
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
    ];
    return (
        <div className="col-12">
            <TabelaPaginado<IPerfil>
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
