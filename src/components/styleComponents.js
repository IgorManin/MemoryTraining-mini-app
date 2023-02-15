import styled from '@emotion/styled/macro';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export const CardsWrapper = styled.div`
  height: 1500px;
  width: 2000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: scroll;
`;

export const CardsWrapper3 = styled(CardsWrapper)`
  height: 1500px;
  width: 2000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: scroll;

  button {
    &:not(:last-child) {
    }
  }
`;

export const MainButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2b7cd9;
  font-size: 20px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  width: 250px;
  height: 50px;
  padding: ${({ $isMobile }) => ($isMobile ? '10px' : '20px')};

  &:hover {
    color: #a0bfe4;
    background-color: #1d3a5c;

    ${CardsWrapper3} {
      padding: ${({ $isMobile }) => ($isMobile ? '10px' : '20px')};
    }
  }
`;

export const CardStyled = styled(Card)`
  background-color: ${({ $color }) => $color};

  ${MainButton} {
    border: 1px solid red;
    border: ${({ $color }) => `5px solid ${$color}`};
  }

  &:hover {
    ${MainButton} {
      &:not(:first-child) {
        border: 3px solid green;
      }
    }
  }
`;

export const GameBlockWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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

export const Health = styled.div`
  height: 40px;
  width: 200px;
  border: 1px solid white;
  background-color: yellow;
`;

export const Level = styled.div`
  height: 40px;
  width: 200px;
  border: 1px solid white;
  background-color: yellow;
`;

export const Text = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  color: black;
  font-size: x-large;
  margin-top: 5px;
`;

export const WrapperForChooseMoveButton = styled.div`
  display: flex;
  width: 30%;
`;

export const WrapperForGameStarButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: end;
`;

export const WrapperBotton = styled.div`
  width: 950px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperButtons = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
