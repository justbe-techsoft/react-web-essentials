
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { RootReducer } from './root.reducer'


const middleware = applyMiddleware(ReduxThunk, logger);
export const store = createStore(RootReducer, middleware);
