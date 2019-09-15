import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {composeWithDevTools} from 'redux-devtools-extension';
import { roundManagerReducer } from './round-manager/reducer';

import {startHandler} from './round-manager/sagas';

const sagaMiddleware  = createSagaMiddleware();

const rootReducer = combineReducers({
  rouds: roundManagerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
  const middlewares = [sagaMiddleware];
  const middelwareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middelwareEnhancer));

  sagaMiddleware.run(startHandler);
  return store;
}
