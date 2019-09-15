import React, {useRef, useState, useEffect} from 'react';

import { StyledInput} from './style';

interface Props {
  value: string;
  placeholder: string;
  onChangeText(text: string):void;
  onFocusCallback?():void;
  onBlurCallback?():void;
}

const NumberInput: React.FC<Props> = (props:Props) =>{
  const [internalValue, setInternalValue] = useState(props.value);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    setInternalValue(props.value);
  }, [props.value]);

  const focusHandle = () => {
    if(inputRef.current){
      inputRef.current.classList.add('blink');
      inputRef.current.placeholder=internalValue;
      setInternalValue('');

      if(props.onFocusCallback){
        props.onFocusCallback();
      }
    }
  }

  const blurHandle = () => {
    if(inputRef.current){
      inputRef.current.classList.remove('blink');

      const result = internalValue ? internalValue : props.value;
      setInternalValue(result);
      props.onChangeText(result);

      if(props.onBlurCallback)
        props.onBlurCallback();
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void =>{
    const formatedNumber= String(Number(event.target.value.replace(/[^\d]/,'')));
    setInternalValue(formatedNumber);
  }

  return(
    <StyledInput
      pattern="[0-9]*"
      ref={inputRef}
      onFocus={focusHandle}
      onBlur={blurHandle}
      onChange={onChangeHandler}
      value={internalValue}
      placeholder={props.placeholder}/>
  );
}

export default NumberInput;
