import styled from 'styled-components';
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


