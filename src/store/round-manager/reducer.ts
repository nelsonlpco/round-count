import {
  ROUND_MANAGER_SET_CURRENT_ROUND,
  ROUND_MANAGER_SET_CURRENT_TIME,
  ROUND_MANAGER_SET_INTERVAL,
  ROUND_MANAGER_SET_ROUNDS,
  ROUND_MANAGER_SET_ROUND_TIME,
  ROUND_MANAGER_SET_CURRENT_INTERVAL,
  ROUND_MANAGER_START,
  roundManagerTypes
} from './types';

import {Round} from './model';

const InitialState: Round = {
  currentRound: 0,
  currentTime: 0,
  interval: 0,
  roundTime: 0,
  rounds: 0,
  currentInterval: 0,
  started: false,
};

function setCurrentRound(state: Round, payload: any) :Round {
  return {...state, currentRound: payload.currentRound};
}

function setCurrentTime(state: Round, payload: any) :Round {
  return {...state, currentTime: payload.currentTime};
}

function setCurrentInterval(state: Round, payload: any) :Round {
  return {...state, currentInterval: payload.interval};
}

function setRoundInterval(state: Round, payload: any) :Round {
  return {...state, interval: payload.interval};
}

function setRounds(state: Round, payload: any) :Round {
  return {...state, rounds: payload.rounds};
}

function setRoundTime(state: Round, payload: any) :Round {
  return {...state, roundTime: payload.roundTime};
}

function start(state: Round, payload: any): Round {
  console.log(state, payload)
  return {
    ...state,
    currentInterval: payload.interval,
    currentRound: payload.rounds,
    currentTime: payload.roundTime }
}

const actionsStrategy = {
  [ROUND_MANAGER_SET_CURRENT_ROUND] : setCurrentRound,
  [ROUND_MANAGER_SET_CURRENT_TIME] : setCurrentTime,
  [ROUND_MANAGER_SET_INTERVAL] : setRoundInterval,
  [ROUND_MANAGER_SET_ROUNDS] : setRounds,
  [ROUND_MANAGER_SET_ROUND_TIME] : setRoundTime,
  [ROUND_MANAGER_START] : start,
  [ROUND_MANAGER_SET_CURRENT_INTERVAL] : setCurrentInterval,
}

export function roundManagerReducer(state = InitialState, action: roundManagerTypes) : Round {
  if(!actionsStrategy[action.type]) return state;

  return actionsStrategy[action.type](state, action.payload);
}
