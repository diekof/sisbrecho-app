import React from 'react'
import { ColumnMeta, TabelaPaginado } from '../../../components/TabelaPaginado'
import { Results } from '../../../types/Results';
import { DataTableStateEvent } from 'primereact/datatable';
import { IPerfilUsuario } from '../../../types/IPerfilUsuario';


type Props = {
    data: Results<IPerfilUsuario> | undefined;
    rows: number;
    rowsPerPage: number[];
    isFetching: boolean;

    handleOnPageChange?: (page: DataTableStateEvent) => void;
    handleFilterChange?: (filterModel: DataTableStateEvent) => void;
    handleDelete?: ((arg: IPerfilUsuario) => void) | null;
    handleEdit?: ((arg: IPerfilUsuario) => void) | null;
    handleView?: ((arg: IPerfilUsuario) => void) | null;
    handleAdicionar?: (() => void) | null;
};

export function PerfilAtribuidoTable({
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
        { field: 'user.pessoa.nome', header: 'Nome' },
    ];
    return (
        <div className="col-12">
            <TabelaPaginado<IPerfilUsuario>
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
                hasEventoAcao
            />
        </div>
    )
}
