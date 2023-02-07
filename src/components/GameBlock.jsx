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
    if (!isUserMove && level !== 1) {
      changeColorRandomElement(level);
    }
  }, [level, isUserMove]);
  console.log('movesHistory in Function', movesHistory);

  const checkId = (id) => {
    if (movesHistory.length === 1) {
      if (id === movesHistory[0]) {
        setUserId({ id, color: 'green' });
        setLevel((prevState) => prevState + 1);
        setTimeout(() => {
          setUserMove(false);
          setHistory([]);
        }, 500);
      } else {
        setUserId({ id, color: 'red' });
        setLives((prevState) => prevState - 1);
      }
    } else {
      if (id === movesHistory[0]) {
        setUserId({ id, color: 'green' });
        setHistory((prevState) => {
          prevState.shift();
          return prevState;
        });
      } else {
        setUserId({ id, color: 'red' });
        setLives((prevState) => prevState - 1);
      }
    }
    setTimeout(() => {
      setUserId(null);
    }, 500);
  };

  const changeColorRandomElement = (level = 1) => {
    setGameStart(true);
    const funcBefore = () => {
      const randomInt = getRandomInt(5);
      setCurrentNumber(randomInt);
      setHistory((prevState) => [...prevState, randomInt]);

      setTimeout(() => {
        setCurrentNumber(null);

        if (movesHistory.length + 1 === level) {
          setUserMove(true);
        }
      }, 1000);
    };
    let count = 0;

    const intervalId = setInterval(function () {
      count++;
      if (count === level) {
        clearInterval(intervalId);
      }
      funcBefore();
    }, 2000);
  };

  const arrayElement = [...Array(buttonsLength).keys()].map((id) => (
    <Element
      key={id}
      disabled={!isUserMove}
      $isActive={id === currentNumber}
      onClick={() => checkId(id, level)}
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
