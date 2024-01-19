import { createSlice } from "@reduxjs/toolkit";
import { IMenu,menuGlobal } from "../../config/menu";
import { RootState } from "../../app/store";
import { AuthApiSlice } from "../auth/authApi";

// import { userApiSice } from "./user/userSlice";

const initialState: { menu: IMenu[] } = {
  menu:  []
};

const check = (item: IMenu, permissions: string[]) => {
  let permissionKeys = item?.permissionKeys

  if (permissionKeys) {
    const has = hasPermissionByKeys(permissionKeys, permissions);
    item.visibleOnRouter = has;
    item.visibleOnMenu = has;
  } else {
    item.visibleOnRouter = true;
    item.visibleOnMenu = true;
  }
  return item;
};

function hasPermissionByKeys(keys: string[] | null, permissions: string[]) {

  var retorno = false;
  if (keys !== null) {
    for (let i = 0; i < keys.length; i++) {
      if (Array.isArray(permissions) && permissions.includes(keys[i])) {
        retorno = true;
        break;
      }
    }
  }
  return retorno;
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      AuthApiSlice.endpoints.buscarUserInfo.matchFulfilled,
      (state, { payload }) => {

        let permissoes:string[] = payload.roles?.map(e => e.nomeRole || '') || []
        let menuLocal: IMenu[] = JSON.parse(JSON.stringify(menuGlobal))

        for (let i = 0; i < menuLocal.length; i++) {
          let items = menuLocal[i].items
          if (!items) {
            menuLocal[i] = check(menuLocal[i], permissoes);
          } else {
            items.map((el) => check(el, permissoes));
          }
        }
        return { menu: menuLocal }
      })
  }
})

export const selectMenus = (state: RootState) => state.menuReducer;
