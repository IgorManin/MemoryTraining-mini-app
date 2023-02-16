import { ButtonStyled, Container, Text } from './styled';

const LosingModal = ({ clickHandler, level, levelDifference }) => (
  <Container>
    <Text>
      {levelDifference < 0
        ? 'Вы достигли уровня - ' + level + ' это новый рекорд!'
        : 'Вы достигли уровня - ' +
          level +
          ', не хватило всего ' +
          levelDifference +
          ' до нового рекорда'}
    </Text>
    <ButtonStyled onClick={clickHandler} variant="contained">
      Попробовать еще раз
    </ButtonStyled>
  </Container>
);

export default LosingModal;
