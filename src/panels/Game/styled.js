import styled from '@emotion/styled/macro';
import Button from '@mui/material/Button';

export const Header = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Game = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Element = styled.button`
  height: 120px;
  width: 120px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? 'yellow' : 'black')};
  border: ${({ $isChecked }) => `3px solid ${$isChecked}`};
  cursor: pointer;
`;

export const Text = styled.div`
  height: 45px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: x-large;
  margin-top: 5px;
  background-color: yellow;
  border: 1px solid white;
`;

export const ButtonStyled = styled(Button)`
  margin: 22px;
`;

export const Record = styled.div`
  width: 100px;
  height: 23px;
  display: flex;
  border-style: dotted;
  color: white;
  font-size: large;
  margin-right: 22px;
  padding: 5px;
`;
