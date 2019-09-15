import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  Board,
  Container,
} from '../../components/styled-components';
import TotalRounds from '../components/total-rounds';
import RoundTime from '../components/round-time';
import Interval from '../components/interval';
import { AppState } from '../../store';
import {setRounds, setRoundTime, setRoundInterval, startAsync, stopAsync} from '../../store/round-manager/actions';

export const ConfigureRoundsPage: React.FC = () => {
  const dispatch = useDispatch();
  const setTotalRounds = useCallback(
    (text:string) => dispatch(setRounds(Number(text))),[]);

  const setRoundTimeHandler = useCallback(
    (value:number) => dispatch(setRoundTime(value)),[]);

  const setRoundIntervalHandler = useCallback(
    (value: number) => dispatch(setRoundInterval(value)),[]
  );

  const startHandler = useCallback(
    () => dispatch(startAsync()),[]
  );

  const { currentTime, currentRound, currentInterval } = useSelector( (state: AppState) => state.rouds);

  return (
    <Container>
      <Board>
        <TotalRounds
          onChangeText={setTotalRounds}
          placeholder="0"
          rounds={currentRound} />
        <RoundTime
          minutes={Math.trunc(currentTime/ 60)}
          seconds={currentTime% 60}
          setRoundTime={setRoundTimeHandler}/>
        <Interval
          minutes={Math.trunc(currentInterval/ 60)}
          seconds={currentInterval % 60}
          setInterval={setRoundIntervalHandler}
        />
        <button onClick={startHandler}>Start</button>
      </Board>
    </Container>
  );
}

export default ConfigureRoundsPage;
