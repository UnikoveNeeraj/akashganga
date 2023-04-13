import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['LoginReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware),
);

const persistor = persistStore(store);

export { store, persistor };
