import React from 'react';
import classNames from 'classnames';
import { List, Bell, User } from 'phosphor-react';
import { useContext, useImperativeHandle, useRef, Ref } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { useAppDispatch } from '../app/hooks';
import { loggedOut } from '../feature/auth/authSlice';

interface TopBarProps {
    openMenu?: boolean;
    handleColapse?: () => void;
    ref?: Ref<any>;
}

export const AppTopbar = React.forwardRef((props: TopBarProps, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const dispatch = useAppDispatch();

    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    function handleLogout() {
        console.log('handleLogout');
        dispatch(loggedOut());
    }

    return (
        <div className="layout-topbar">
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                {/*  <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-cog"></i>
                    <span>Settings</span>
                </button>*/}
                <button type="button" className="p-link layout-topbar-button" onClick={handleLogout}>
                    <i className="pi pi-sign-out"></i>
                    <span>Sair</span>
                </button>
            </div>
        </div>
    );
});
