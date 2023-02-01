import React, { useEffect, useState } from 'react';
import {
  Element,
  Footer,
  Game,
  GameBlockWrapper,
  Header,
  Health,
  Level,
  Text,
  WrapperForChooseMoveButton,
  WrapperForGameStarButton,
} from './styleComponents';
import Button from '@mui/material/Button';

const buttonsLength = 5;
const getRandomInt = (max) => Math.floor(Math.random() * max);

const GameBlock = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [movesHistory, setHistory] = useState([]);
  const [currentUserId, setUserId] = useState(null);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (lives === 0) {
      alert('loose');
    }
  }, [lives]);

  const checkId = (id) => {
    if (id === movesHistory[0]) {
      setUserId({ id, color: 'green' });
      setLevel((prevState) => prevState + 1);
      setTimeout(() => {
        setUserMove(false);
      }, 500);
    } else {
      setUserId({ id, color: 'red' });
      setLives((prevState) => prevState - 1);
    }
    setTimeout(() => {
      setUserId(null);
    }, 500);
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
      onClick={() => checkId(id)}
      $isChecked={id === currentUserId?.id ? currentUserId?.color : null}
    />
  ));

  return (
    <GameBlockWrapper>
      <Header>
        <WrapperForChooseMoveButton>
          {isGameStart && (
            <Button style={{ margin: 22 }} variant="contained">
              {isUserMove ? 'ход игрока' : 'ход компьютера'}
            </Button>
          )}
        </WrapperForChooseMoveButton>

        <WrapperForGameStarButton>
          <Button
            onClick={() => changeColorRandomElement()}
            style={{ margin: 22 }}
            variant="contained"
          >
            Начать игру
          </Button>
        </WrapperForGameStarButton>
      </Header>
      <Game>{arrayElement}</Game>
      <Footer>
        {isGameStart && (
          <Level>
            <Text> Уровень: {level}</Text>
          </Level>
        )}
        {isGameStart && (
          <Health>
            <Text> Жизни: {lives}</Text>
          </Health>
        )}
      </Footer>
    </GameBlockWrapper>
  );
};

export default GameBlock;
