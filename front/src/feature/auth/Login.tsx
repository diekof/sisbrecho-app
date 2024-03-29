import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormLogin } from './components/FormLogin'
import { useLoginMutation } from './authApi'
import { selectIsAuthenticated, setToken } from './authSlice'
import { ILogin } from '../../types/ILogin'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import fundo from '../../assets/fundo.jpg'
import logo from '../../assets/logo.png'
import style from './Login.module.css'
import { useSnackbar } from 'notistack'

export function Login() {
    const navigate = useNavigate()
    const [isCadastro, setIsCadastro] = React.useState(false)
    const { register, handleSubmit, reset, control, formState: { errors, defaultValues } } = useForm<ILogin>({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const [login, { isLoading }] = useLoginMutation()


    useEffect(() => {

        if (isAuthenticated) {
            navigate("/app/bemvindo")
        }
    }, [isAuthenticated])

    function handleCadastrar() {
        setIsCadastro(!isCadastro)
    }

    async function Logar(data: ILogin) {
        try {

            const token = await login(data).unwrap()
            console.log('token ', token)
            dispatch(setToken(token))
            // navigate('/app')
        } catch (err) {
            console.log(err)
            enqueueSnackbar('Usuário ou senha inválidos', { variant: 'error' })
        }
    }

    return (
        <>
            <div
                style={{ background: `url(${fundo}) ` }}
                className={` w-full h-full fixed  bg-center bg-no-repeat`}
            />
            <div style={{ background: 'rgba(0,0,0,0.2)' }} className={` w-full h-full absolute`} />

            <div className={`flex justify-content-center align-items-center h-screen  `} >

                <div
                    style={{ borderColor: "rgba(255, 255, 255, 0.23)" }}
                    className={`${style.container} flex justify-content-center align-items-center border-1 border-solid py-6`}
                >
                    <div
                        className={`flex flex-column  align-items-center   gap-3 px-3 md:px-6 `}
                        style={{
                            maxWidth: '1000px',
                            maxHeight: '650px',
                            overflow: 'auto',
                            overflowX: 'hidden'
                        }}
                    >

                        <img src={logo} alt="Logo da Stellato" className='max-w-9rem' />
                        <FormLogin
                            onCadastrar={handleCadastrar}
                            register={register}
                            errors={errors}
                            onLogar={handleSubmit(Logar)}
                            control={control}
                            isLoading={isLoading}
                        />

                    </div>
                </div >
            </div >
        </>
    )
}
