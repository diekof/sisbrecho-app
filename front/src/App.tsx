import { BrowserRouter } from 'react-router-dom';
import { RouterApp } from './RouterApp';
import { Tooltip } from 'primereact/tooltip';

import { ConfigCtxProvider } from './context/ConfigCtx';
import { Provider } from 'react-redux';
import { setupStore } from "./app/store"

import './config/primereact';
import './config/locale';
import './styles/layout/layout.scss';
import { ToastProvider } from './provider/PrintToast';

function App() {
    return (
        <>
            <Provider store={setupStore()}>
                <ConfigCtxProvider>
                    <ToastProvider>
                        <BrowserRouter basename='portifolio'>
                            <RouterApp />
                        </BrowserRouter>
                    </ToastProvider>
                </ConfigCtxProvider>
            </Provider>
        </>
    );
}

export default App;
