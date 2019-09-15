import {
  ROUND_MANAGER_SET_CURRENT_ROUND,
  ROUND_MANAGER_SET_CURRENT_TIME,
  ROUND_MANAGER_SET_INTERVAL,
  ROUND_MANAGER_SET_ROUNDS,
  ROUND_MANAGER_SET_ROUND_TIME,
  ROUND_MANAGER_START,
  ROUND_MANAGER_SET_CURRENT_INTERVAL,
  roundManagerTypes,
  roundManagerSagaTypers,
  ROUND_MANAGER_START_ASYNC,
  ROUND_MANAGER_STOP_ASYNC,
} from './types';

export function setCurrentRound(currentRound: number) : roundManagerTypes {
  return {
    type: ROUND_MANAGER_SET_CURRENT_ROUND,
    payload: {currentRound}
  };
}

export function setCurrentTime(currentTime: number): roundManagerTypes {
  return  {
    type: ROUND_MANAGER_SET_CURRENT_TIME,
    payload: {currentTime}
  };
}

export function setRoundInterval(interval: number ): roundManagerTypes {
  return  {
    type: ROUND_MANAGER_SET_INTERVAL,
    payload: {interval},
  }
}

export function setRounds(rounds: number):  roundManagerTypes {
  return {
    type: ROUND_MANAGER_SET_ROUNDS,
    payload: {rounds}
  }
}

export function setRoundTime(roundTime: number): roundManagerTypes {
  return {
    type: ROUND_MANAGER_SET_ROUND_TIME,
    payload: {roundTime}
  }
}

export function startAsync(): roundManagerSagaTypers {
  return {
    type: ROUND_MANAGER_START_ASYNC,
    payload: {},
  }
}

export function stopAsync(): roundManagerSagaTypers {
  return {
    type: ROUND_MANAGER_STOP_ASYNC,
    payload:{},
  }
}

export function start(rounds: number, roundTime: number, interval: number): roundManagerTypes {
  return {
    type: ROUND_MANAGER_START,
    payload: {rounds, roundTime, interval}
  }
}

export function setCurrentInterval(interval: number) : roundManagerTypes {
  return {
    type: ROUND_MANAGER_SET_CURRENT_INTERVAL,
    payload:{interval}
  }
}
