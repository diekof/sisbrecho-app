import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectIsAuthenticated } from '../feature/auth/authSlice'
import { AppLayout } from '../layout/AppLayout'
import { useBuscarUserInfoQuery } from '../feature/auth/authApi'

export function PrivateOutlet() {
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const { data, } = useBuscarUserInfoQuery()
    const location = useLocation()

    return isAuthenticated ? (
        <AppLayout />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    )
}
