import { PanelWrapper } from './styleComponents';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MainBlock = (props) => {
  return (
    <PanelWrapper>
      <Stack spacing={2} direction="row">
        {/* <Button onClick={props.go} data-to="news" variant="contained">*/}
        {/*  Читать новости*/}
        {/* </Button>*/}
        <Button onClick={props.go} data-to="game" variant="contained">
          Игра
        </Button>
      </Stack>
    </PanelWrapper>
  );
};

export default MainBlock;
