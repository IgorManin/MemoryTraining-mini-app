import React, { useState } from 'react';
import {
  Element,
  Footer,
  Game,
  GameBlockWrapper,
  Header,
} from './styleComponents';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const state = {
  array: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  randomInt: [],
  playersArray: [],
};
const getRandomInt = (max) => Math.floor(Math.random() * max);

const addCurrentNumberInArray = (value) => {
  const array = [value];
  const filterArray = array.filter((element) => element !== null);
  state.randomInt.push(...filterArray);
};

const checkValues = () => {
  if (state.randomInt.toString() === state.playersArray.toString()) {
    alert('А вот теперь заебца');
  } else {
    alert('хуй в сраку');
    state.playersArray.shift();
  }
  console.log('players', state.playersArray);
  console.log('random', state.randomInt);
};

const selectedElement = (value) => {
  const array = [value];
  state.playersArray.push(...array);
  checkValues();
};

const GameBlock = () => {
  const [currentNumber, setCurrentNumber] = useState(null);

  const changeColorRandomElement = () => {
    setCurrentNumber(getRandomInt(5) + 1);
    setTimeout(() => {
      setCurrentNumber(null);
    }, 1000);
  };

  addCurrentNumberInArray(currentNumber);

  const arrayElement = state.array.map(({ id }) => (
    <Element
      key={id}
      $isActive={id === currentNumber}
      // className={`element ${id === currentNumber ? 'elemActive' : 'element'}`}
      onClick={() => selectedElement(id)}
    />
  ));

  // console.log('players', state.playersArray);
  // console.log('random', state.randomInt);

  return (
    <GameBlockWrapper>
      <Header>
        <Stack spacing={2} direction="row">
          <Button
            onClick={() => changeColorRandomElement()}
            style={{ margin: 22 }}
            variant="contained"
          >
            Начать игру
          </Button>
        </Stack>
      </Header>
      <Game>{arrayElement}</Game>
      <Footer>
        <Button style={{ width: 150 }} variant="contained">
          Готово
        </Button>
      </Footer>
    </GameBlockWrapper>
  );
};

export default GameBlock;
