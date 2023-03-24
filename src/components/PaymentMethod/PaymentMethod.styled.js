import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${props => (props.selected ? '#fff' : '#e1e1e1')};
  border-color: ${props => (props.selected ? '#0bf440' : '#000')};
  transition: background-color 300ms linear, border-color 300ms linear;
  cursor: pointer;
  :hover {
    border: 1px solid #0bf440;
    background-color: #fff;
  }
`;
