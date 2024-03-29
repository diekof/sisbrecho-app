import {
    Action,
    combineReducers,
    configureStore,
    PreloadedState,
    ThunkAction,
} from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import { authSlice } from "../feature/auth/authSlice";
import { uploadReducer } from "../feature/upalod/UploadSlice";
import { messageSlice } from "../feature/message/messageSlice";
import { menuSlice } from "../feature/menu/menuSlice";
import { uploadQueue } from "../middleware/uploadQueue";
import { apiAuthSlice } from "../feature/api/apiAuthSlice";
import { AuthApiSlice } from "../feature/auth/authApi";


const rootReducer = combineReducers({
    auth: authSlice.reducer,
    uploadSlice: uploadReducer,
    messageReducer: messageSlice.reducer,
    menuReducer:menuSlice.reducer,
    [AuthApiSlice.reducerPath]: apiSlice.reducer,
});


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ["uploads/addUpload, uploads/updateUpload"],
                    ignoredPaths: ["uploadSlice.file","menuReducer.menu"],
                },
            })
            .prepend(uploadQueue.middleware)
            .concat(apiSlice.middleware)
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
