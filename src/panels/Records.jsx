import { BackToMainMenuButton, Container } from '../components/styleComponents';
import PropTypes from 'prop-types';

const Records = ({ go }) => {
  return (
    <Container>
      <div>
        <BackToMainMenuButton onClick={go} data-to="main" variant="contained">
          Назад
        </BackToMainMenuButton>
      </div>
    </Container>
  );
};

Records.propTypes = {
  go: PropTypes.func,
};

export default Records;
