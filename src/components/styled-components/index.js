import styled from 'styled-components';

export const Label = styled.div`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 80vh;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0px 20px 0 rgba(0,0,0,0.1);
`;
