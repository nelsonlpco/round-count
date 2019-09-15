import React, {useState, useEffect, useRef, SyntheticEvent} from 'react';

import { Container, Dots, NumberContainer, StyledInput} from './style';
import NumberInput from '../number-input';

const MaxValue:number = 59;
interface Props {
  minutes: number,
  seconds: number,
  onChangeTime(value:number):void
}

const TimeInput: React.FC<Props> = ({minutes, seconds, onChangeTime}) =>{

  const [inEdition, setInEdition] = useState(false);

  const onFocusHandler = ():void => {
    setInEdition(true);
  };

  const onBlurHandler = ():void => {
      setInEdition(false);
  };

  const validateValue = (value:string): number=> {
    let result = Number(value);
    if(Number.isNaN(result))
      return 0;

    if(result > MaxValue)
     result = MaxValue

    return result;
  }

  const setSecondsHandler = (value: string):void => {
    const tmpSeconds = validateValue(value);
    const minutesToSeconds = minutes * 60;
    onChangeTime(minutesToSeconds + tmpSeconds);
  }

  const setMinutesHandler = (value: string):void => {
    const tmpMinutes = validateValue(value) * 60;
    onChangeTime(tmpMinutes + seconds);
  }

  console.log(minutes, seconds, '<==')

  return(
    <Container>
      <NumberContainer>
        <NumberInput
          value={String(minutes)}
          placeholder="00"
          onBlurCallback={onBlurHandler}
          onFocusCallback={onFocusHandler}
          onChangeText={setMinutesHandler}
        />
      </NumberContainer>
      <Dots className={inEdition? '': 'blink'}>:</Dots>
      <NumberContainer>
        <NumberInput
          value={String(seconds)}
          placeholder="00"
          onBlurCallback={onBlurHandler}
          onFocusCallback={onFocusHandler}
          onChangeText={setSecondsHandler}
        />
      </NumberContainer>
    </Container>
  );
}

export default TimeInput;
