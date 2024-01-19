import React from 'react'
import { ColumnMeta, TabelaPaginado } from '../../../components/TabelaPaginado'
import { Results } from '../../../types/Results';
import { DataTableStateEvent } from 'primereact/datatable';
import { IRole } from '../../../types/IRole';


type Props = {
    data: Results<IRole> | undefined;
    rows: number;
    rowsPerPage: number[];
    isFetching: boolean;

    handleOnPageChange: (page: DataTableStateEvent) => void;
    handleFilterChange: (filterModel: DataTableStateEvent) => void;
    handleDelete?: ((arg: IRole) => void) | null;
    handleEdit: ((arg: IRole) => void) | null;
    handleView?: ((arg: IRole) => void) | null;
    handleAdicionar?: (() => void) | null;
};

export function RoleTable({
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
        { field: 'nomeRole', header: 'Nome' },
    ];
    return (
        <div className="col-12">
            <TabelaPaginado<IRole>
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
