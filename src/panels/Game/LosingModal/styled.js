import styled from '@emotion/styled/macro';
import { Button, ModalCardBase } from '@vkontakte/vkui';

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

export const ModalCardBaseStyled = styled(ModalCardBase)`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
