import React from 'react';

import { InputContainer, Label} from '../../../components/styled-components';
import TimeInput from '../../../components/time-input';

interface Props {
  minutes: number,
  seconds: number,
  setRoundTime(seconds: number):void,
};

const RoundTime : React.FC<Props> = (props:Props) => {
  return (
    <InputContainer>
        <Label>Duração do round</Label>
        <TimeInput
          minutes={props.minutes}
          seconds={props.seconds}
          onChangeTime={(value:number) => props.setRoundTime(value)}/>
    </InputContainer>
  );
}

export default RoundTime;
