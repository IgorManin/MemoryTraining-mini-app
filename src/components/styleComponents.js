import styled from '@emotion/styled/macro';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export const PanelWrapper = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/src/img/pnd.png);
`;

export const CardsWrapper = styled.div`
  height: 1500px;
  width: 2000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: scroll;
`;

export const ButtonStyled = styled(Button)`
  border: 2px solid red;
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

// export const NoAddress = styled.div`
//   text-align: center;
//   padding: ${({ $isMobile }) =>};
// `

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
  justify-content: center;
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
  cursor: pointer;
`;
