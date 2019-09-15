import {takeLatest,put, delay, select, call} from 'redux-saga/effects';

import { ROUND_MANAGER_START_ASYNC} from './types';
import {AppState} from '../index';
import { setCurrentRound, start, setCurrentTime, setCurrentInterval} from './actions';

function* startRound() {
  const {
    rounds,
    roundTime,
    interval
  } = yield select((state: AppState) => state.rouds);

  yield put(start(rounds, roundTime, interval));
  yield call(roundsManager);
}

function* roundsManager() {
  let currentRound = yield select((state: AppState) => state.rouds.currentRound);

  while(currentRound > 0){
    yield call(roundStart);
    yield put(setCurrentRound(currentRound - 1));
    currentRound = yield select((state: AppState) => state.rouds.currentRound);
  }

}

function* roundStart() {
  const {roundTime} = yield select((state:AppState) => state.rouds);
  let currentTime= yield select((state: AppState) => state.rouds.currentTime);
  while(currentTime> 1){
    currentTime= yield select((state: AppState) => state.rouds.currentTime);
    yield put(setCurrentTime(currentTime- 1));
    yield delay(1000);
  }

  yield put(setCurrentTime(roundTime));
  yield call(intervalStart);
}

function* intervalStart() {
  const {interval} = yield select((state:AppState) => state.rouds);
  let currentInterval = yield select((state: AppState) => state.rouds.currentInterval);
  while(currentInterval > 1){
    currentInterval = yield select((state: AppState) => state.rouds.currentInterval);
    yield put(setCurrentInterval(currentInterval- 1));
    yield delay(1000);
  }
  yield put(setCurrentInterval(interval));
}

export function* startHandler(){
  yield takeLatest(ROUND_MANAGER_START_ASYNC, startRound);
}
