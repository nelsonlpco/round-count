export const ROUND_MANAGER_SET_ROUNDS = 'ROUND_MANAGER_SET_ROUNDS';
export const ROUND_MANAGER_SET_ROUND_TIME = 'ROUND_MANAGER_SET_ROUND_TIME';
export const ROUND_MANAGER_SET_INTERVAL = 'ROUND_MANAGER_SET_INTERVAL';
export const ROUND_MANAGER_SET_CURRENT_TIME = 'ROUND_MANAGER_SET_CURRENT_TIME';
export const ROUND_MANAGER_SET_CURRENT_ROUND = 'ROUND_MANAGER_SET_CURRENT_ROUND';
export const ROUND_MANAGER_SET_CURRENT_INTERVAL= 'ROUND_MANAGER_SET_CURRENT_INTERVAL';
export const ROUND_MANAGER_START_ASYNC = 'ROUND_MANAGER_START_ASYNC';
export const ROUND_MANAGER_STOP_ASYNC = 'ROUND_MANAGER_STOP_ASYNC';
export const ROUND_MANAGER_START = 'ROUND_MANAGER_START';

interface setRounds {
  type: typeof ROUND_MANAGER_SET_ROUNDS,
  payload: {rounds: number},
}

interface setRoundTime {
  type: typeof ROUND_MANAGER_SET_ROUND_TIME,
  payload: {roundTime: number},
};

interface setRoundInterval {
  type: typeof ROUND_MANAGER_SET_INTERVAL,
  payload: {interval: number},
};

interface setCurrentTime {
  type: typeof ROUND_MANAGER_SET_CURRENT_TIME,
  payload: {currentTime: number},
}

interface setCurrentRound {
  type: typeof ROUND_MANAGER_SET_CURRENT_ROUND,
  payload: {currentRound: number},
};

interface startAsync{
  type: typeof ROUND_MANAGER_START_ASYNC,
  payload:{},
};

interface stopAsync{
  type: typeof ROUND_MANAGER_STOP_ASYNC,
  payload:{},
};

interface start {
  type: typeof ROUND_MANAGER_START,
  payload:{
    interval: number,
    rounds: number,
    roundTime: number
  },
}

interface setCurrentInterval {
  type: typeof ROUND_MANAGER_SET_CURRENT_INTERVAL,
  payload:{interval: number}
}

export type roundManagerTypes = setCurrentRound
| setCurrentTime
| setRoundTime
| setRoundInterval
| setRounds
| setCurrentInterval
| start;

export type roundManagerSagaTypers = startAsync | stopAsync;

