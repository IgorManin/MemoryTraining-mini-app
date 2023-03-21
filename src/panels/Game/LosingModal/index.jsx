import PropTypes from 'prop-types';
import { ButtonStyled } from './styled';
import {
  Icon28AdvertisingCircleFillRed,
  Icon28CheckCircleFill,
} from '@vkontakte/icons';
import { ModalCardBase } from '@vkontakte/vkui';

export const LosingModal = ({ level, levelDifference, clickHandler }) => {
  return (
    <ModalCardBase
      header={
        levelDifference < 0
          ? 'Вы достигли уровня - ' + level + ' это новый рекорд!'
          : 'Вы достигли уровня - ' +
            level +
            ', не хватило всего ' +
            levelDifference +
            ' до нового рекорда'
      }
      actions={
        <ButtonStyled stretched onClick={clickHandler} variant="contained">
          Попробовать еще раз
        </ButtonStyled>
      }
      icon={
        levelDifference > 0 ? (
          <Icon28AdvertisingCircleFillRed key="icon" />
        ) : (
          <Icon28CheckCircleFill key="icon" />
        )
      }
    />
  );
};

LosingModal.propTypes = {
  level: PropTypes.number,
  levelDifference: PropTypes.number,
  clickHandler: PropTypes.func,
};
