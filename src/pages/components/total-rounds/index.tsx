import React from 'react';

import { InputContainer, Label} from '../../../components/styled-components';
import NumberInput from '../../../components/number-input';
import { placeholder } from '@babel/types';

interface Props {
  onBlurCallback?():void,
  onFocusCallback?():void,
  onChangeText(text:string):void
  placeholder:string,
  rounds: number,
};

export const TotalRounds: React.FC<Props> = (props:Props) => {

  function onBlurHandler():void {
    if(props.onBlurCallback)
      props.onBlurCallback();
  }

  function onFocusHandler():void{
    if(props.onFocusCallback)
      props.onFocusCallback();
  }

  return (
    <InputContainer>
      <Label>Número de rounds</Label>
      <NumberInput
        onBlurCallback={onBlurHandler}
        onFocusCallback={onFocusHandler}
        onChangeText={text => props.onChangeText(text)}
        placeholder={props.placeholder}
        value={String(props.rounds)}
      />
    </InputContainer>
  );
}

export default TotalRounds;
