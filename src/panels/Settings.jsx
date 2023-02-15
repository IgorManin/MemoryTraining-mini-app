import Button from '@mui/material/Button';

const Settings = (props) => {
  return (
    <div>
      <Button
        onClick={props.go}
        data-to="main"
        style={{ margin: 22, width: '120px' }}
        variant="contained"
      >
        Назад
      </Button>
    </div>
  );
};

export default Settings;
