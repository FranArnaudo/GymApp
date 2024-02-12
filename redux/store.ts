import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import appReducer from './reducers';

// // eslint-disable-next-line no-undef
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// export const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
// export const persistor = persistStore(store);

export const store = createStore(appReducer)