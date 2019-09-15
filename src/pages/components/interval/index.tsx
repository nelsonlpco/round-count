import React from 'react';

import { InputContainer, Label} from '../../../components/styled-components';
import TimeInput from '../../../components/time-input';

interface Props {
  minutes: number,
  seconds: number,
  setInterval(seconds: number):void,
};

const Interval : React.FC<Props> = (props:Props) => {
  return (
    <InputContainer>
        <Label>Intervalo entre rounds</Label>
        <TimeInput
          minutes={props.minutes }
          seconds={props.seconds}
          onChangeTime={props.setInterval} />
    </InputContainer>
  );
}

export default Interval;
