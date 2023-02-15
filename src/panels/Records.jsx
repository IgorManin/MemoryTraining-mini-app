import Button from '@mui/material/Button';

const Records = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Records;
