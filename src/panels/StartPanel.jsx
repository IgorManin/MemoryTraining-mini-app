import { Panel } from '@vkontakte/vkui';
import { MainTittle, TittleWrapper, WrapperText } from '../styleComponents';
import Button from '@mui/material/Button';

const StartPanel = (props) => {
  return (
    <Panel id={props.id}>
      <TittleWrapper>
        <WrapperText>
          <MainTittle>Игра для тренировки памяти</MainTittle>
          <Button
            onClick={props.go}
            data-to="game"
            style={{ margin: 22 }}
            variant="contained"
          >
            Начать игру
          </Button>
        </WrapperText>
      </TittleWrapper>
    </Panel>
  );
};

export default StartPanel;
