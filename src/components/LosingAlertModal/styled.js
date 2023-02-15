import styled from '@emotion/styled/macro';
import Button from '@mui/material/Button';

export const Container = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  box-shadow: 5px 5px 5px yellow;
`;

export const Text = styled.p`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: x-large;
  color: white;
  text-align: center;
`;

export const ButtonStyled = styled(Button)`
  margin: 22px;
`;
