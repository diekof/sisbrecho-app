import React from 'react'
import { Results } from '../../../types/Results';
import { DataTableStateEvent } from 'primereact/datatable';
import { User } from '../../../types/IUser';
import { ColumnMeta, TabelaPaginado } from '../../../components/TabelaPaginado';
import { ButtonIcon } from '../../../components/ButtonComponent';


type Props = {
    data: Results<User> | undefined;
    rows: number;
    rowsPerPage: number[];
    isFetching: boolean;

    handleOnPageChange?: (page: DataTableStateEvent) => void;
    handleFilterChange?: (filterModel: DataTableStateEvent) => void;
    handleAtribuir: (arg: User) => void;
};


export function PerfilAtribuirTable({
    data,
    rows,
    rowsPerPage,
    isFetching,
    handleOnPageChange,
    handleFilterChange,
    handleAtribuir
}: Props) {
    const columns: ColumnMeta[] = [
        { field: 'pessoa.nome', header: 'Nome' },
        {
            header: '', body: (rowData: User) => {
                return (
                    <ButtonIcon severity="info" type="button" tooltip="Atribuir" icon="pi pi-plus" onClick={(e) => handleAtribuir(rowData)} />
                )
            }
        },
    ];
    return (
        <div className="col-12">
            <TabelaPaginado<User>
                data={data}
                columns={columns}
                isFetching={isFetching}
                handleFilterChange={handleFilterChange}
                handleOnPageChange={handleOnPageChange}
                rows={rows}
                rowsPerPage={rowsPerPage}
            />
        </div>
    )
}