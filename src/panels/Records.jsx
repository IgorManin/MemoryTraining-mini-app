import { BackToMainMenuButton, Container } from '../components/styleComponents';

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

export default Records;
