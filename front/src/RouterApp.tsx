import { Routes, Route } from 'react-router-dom';
import { Redirect } from './components/Redirect';
import { LayoutProvider } from './layout/context/layoutcontext';

import { ListPessoa } from './feature/pessoa/ListPessoa';
import { CreatePessoa } from './feature/pessoa/CreatePessoa';
import { EditPessoa } from './feature/pessoa/EditPessoa';
import { ViewPessoa } from './feature/pessoa/ViewPessoa';

import { Login } from './feature/auth/Login';
import { Dashboard } from './feature/inicial/Dashboard';
import { PrivateOutlet } from './utils/PrivateOutlet';
import { ListRole } from './feature/role/ListRole';
import { CreateRole } from './feature/role/CreateRole';
import { EditRole } from './feature/role/EditRole';
import { ListPerfil } from './feature/perfil/ListPerfil';
import { CreatePerfil } from './feature/perfil/CreatePerfil';
import { EditPerfil } from './feature/perfil/EditPerfil';



export function RouterApp() {
    return (
        <LayoutProvider>
            <Routes>
                <Route path="/" >
                    <Route path="/" element={<Redirect url='/login' />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route path="/app" element={<PrivateOutlet />} >
                    <Route path="/app" element={<Redirect url='/app/bemvindo' />} />
                    <Route path="/app/bemvindo" element={<Dashboard />} />


                    <Route path="/app/cadastro/pessoa" element={<ListPessoa />} />
                    <Route path="/app/cadastro/pessoa/new" element={<CreatePessoa />} />
                    <Route path="/app/cadastro/pessoa/edit/:id" element={<EditPessoa />} />
                    <Route path="/app/cadastro/pessoa/view/:id" element={<ViewPessoa />} />

                    <Route path="/app/cadastro/roles" element={<ListRole />} />
                    <Route path="/app/cadastro/role/new" element={<CreateRole />} />
                    <Route path="/app/cadastro/role/edit/:id" element={<EditRole />} />
                    {/* <Route path="/app/cadastro/role/view/:id" element={<ViewRole />} /> */}

                    <Route path="/app/cadastro/perfis" element={<ListPerfil />} />
                    <Route path="/app/cadastro/perfil/new" element={<CreatePerfil />} />
                    <Route path="/app/cadastro/perfil/edit/:id" element={<EditPerfil />} />
                </Route>
            </Routes>
        </LayoutProvider>
    );
}
