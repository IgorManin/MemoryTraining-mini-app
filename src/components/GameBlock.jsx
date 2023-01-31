import React, { useState } from 'react';
import {
  Element,
  Footer,
  Game,
  GameBlockWrapper,
  Header,
} from './styleComponents';
import Button from '@mui/material/Button';

const buttonsLength = 5;
const getRandomInt = (max) => Math.floor(Math.random() * max);

const GameBlock = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [movesHistory, setHistory] = useState([]);

  const selectedButton = (id) => {
    console.log('id выбранного элемента', id);
    console.log('сохраненный элемент в стейте', movesHistory);
    if (id === +movesHistory.join()) {
      alert('nice');
    }
  };

  const changeColorRandomElement = () => {
    setGameStart(true);
    const randomInt = getRandomInt(5);
    setCurrentNumber(randomInt);
    setHistory((prevState) => [...prevState, randomInt]);

    setTimeout(() => {
      setCurrentNumber(null);
      setUserMove(true);
    }, 1000);
  };

  const arrayElement = [...Array(buttonsLength).keys()].map((id) => (
    <Element
      key={id}
      disabled={!isUserMove}
      $isActive={id === currentNumber}
      onClick={() => selectedButton(id)}
    />
  ));

  return (
    <GameBlockWrapper>
      <Header>
        {isGameStart && (
          <Button style={{ margin: 22 }} variant="contained">
            {isUserMove ? 'ход игрока' : 'ход компьютера'}
          </Button>
        )}

        <Button
          onClick={() => changeColorRandomElement()}
          style={{ margin: 22 }}
          variant="contained"
        >
          Начать игру
        </Button>
      </Header>
      <Game>{arrayElement}</Game>
      <Footer></Footer>
    </GameBlockWrapper>
  );
};

export default GameBlock;
