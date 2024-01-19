import { ContextToast } from './../provider/PrintToast';
import { ToastMessage } from 'primereact/toast';
import { useContext } from 'react';

export function useToast() {
    const { toastRef } = useContext(ContextToast);
    function printToast(arg: ToastMessage) {
        toastRef?.current?.show({ ...arg })
    }
    return printToast
}