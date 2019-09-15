import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex: 4;
`;

export const Dots = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
`;

export const StyledInput = styled.input`
  border: none;
  background: inherit;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
  width: 100%;
  direction: rtl;
`;


