import { AlertPopUp, AlertText, WrapperAlertText } from '../styleComponents';
import Button from '@mui/material/Button';
import { Panel } from '@vkontakte/vkui';

const LoosAlertModal = (props) => {
  const lastLevel = props.level;
  return (
    <AlertPopUp>
      <WrapperAlertText>
        <AlertText>
          Вы проиграли, хотите попробовать еще раз? Рекод столько! - {lastLevel}
        </AlertText>
      </WrapperAlertText>
      <Panel id={props.id}>
        <Button
          onClick={props.go}
          data-to="home"
          style={{ margin: 22 }}
          variant="contained"
        >
          Попробовать еще раз
        </Button>
      </Panel>
    </AlertPopUp>
  );
};

export default LoosAlertModal;
