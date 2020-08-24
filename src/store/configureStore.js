import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "storage",
  whitelist: ["issues"],
  storage,
};

export default function configureStore(initialState, reducer) {
  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(
    persistedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  let persistor = persistStore(store);
  return { store, persistor };
}
