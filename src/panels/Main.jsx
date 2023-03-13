import { Panel } from '@vkontakte/vkui';
import { Container } from '../components/styleComponents';
import Button from '@mui/material/Button';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';

const Title = styled.p`
  display: flex;
  flex-direction: column;
  font-size: x-large;
  color: white;
  text-align: center;
`;

const ButtonStyled = styled(Button)`
  margin: 5px;
  width: 300px;
`;

const buttons = [
  {
    name: 'Начать игру',
    dataTo: 'game',
  },
  {
    name: 'Настройки',
    dataTo: 'settings',
  },
  {
    name: 'Список лидеров',
    dataTo: 'records',
  },
];

const MainPanel = ({ id, go }) => (
  <Panel id={id}>
    <Container>
      <Title>Игра для тренировки памяти</Title>
      {buttons.map(({ name, dataTo }) => (
        <ButtonStyled
          key={name}
          onClick={go}
          data-to={dataTo}
          variant="contained"
        >
          {name}
        </ButtonStyled>
      ))}
    </Container>
  </Panel>
);

MainPanel.propTypes = {
  id: PropTypes.number,
  go: PropTypes.func,
};

export default MainPanel;
