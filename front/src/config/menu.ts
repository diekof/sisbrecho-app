import { Dashboard } from '../feature/inicial/Dashboard'
import Route from '../utils/RouteMixins'

export interface IMenu {
    label: string | null
    icon: string
    items?: IMenu[] | null
    nameRef?: null | string,
    to?: string,
    url?: string,
    component?: React.ReactNode,
    visibleOnRouter?: boolean,
    visibleOnMenu?: boolean,
    badgeStyleClass?: string
    permissionKeys?: string[] | null
    disabled?: boolean
}
  
  
export let menuGlobal: IMenu[] = [
    { ...Route(null, 'Pagina Inicial', '/app/bemvindo', Dashboard, null), visibleOnMenu: true },
    {
      label: "Inscrições",
      icon: "pi pi-circle-on",
      items: [
        // ...ExemploRoutes,
      ]
    },
    {
      label: "Administrativo",
      icon: "pi pi-circle-on",
      items: [
      ]
    }
  ];

const menu = () => {
    var retorno = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: './' }]
        },
        {
            label: 'Cadastros',
            items: [
                { label: 'Pessoas', icon: 'pi pi-fw pi-user', to: 'cadastro/pessoa' },
                { label: 'Perfil', icon: 'pi pi-fw pi-id-card', to: 'cadastro/perfis' },
                { label: 'Roles', icon: 'pi pi-fw pi-id-card', to: 'cadastro/roles' },
            ]
        }
    ]

    return retorno
}

export default menu();