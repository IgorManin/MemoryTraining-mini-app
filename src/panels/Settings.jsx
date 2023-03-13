import PropTypes from 'prop-types';
import { BackToMainMenuButton, Container } from '../components/styleComponents';

const Settings = ({ go }) => {
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

Settings.propTypes = {
  go: PropTypes.func,
};

export default Settings;
