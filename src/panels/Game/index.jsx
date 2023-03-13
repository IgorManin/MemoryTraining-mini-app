import React, { useEffect, useState } from 'react';
import { Panel } from '@vkontakte/vkui';
import {
  BackToMainMenuButton,
  Container,
} from '../../components/styleComponents';
import {
  ButtonStyled,
  Element,
  Footer,
  Game,
  Header,
  Record,
  Text,
} from './styled';
import PropTypes from 'prop-types';

const buttonsLength = 5;
const getRandomInt = (max) => Math.floor(Math.random() * max);

const GameBlock = ({ go, id, goModals, type, recordGame, setRecordGame }) => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [movesHistory, setHistory] = useState([]);
  const [currentUserId, setUserId] = useState(null);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [moveNumber, setNumber] = useState(1);
  const [isBackToHome, setBackToHome] = useState(true);
  const [record, setRecord] = useState(0);
  const [isGameBegun, setGameBegun] = useState(true);
  const [isCurrentRecord, serCurrentRecord] = useState(null);

  const [isGameEnd, setGameEnd] = useState(true);
  const [isGame, setGame] = useState(true);

  useEffect(() => {
    if (!isUserMove && level !== 1) {
      changeColorRandomElement(level);
    }
  }, [level, isUserMove]);

  useEffect(() => {
    if (type === 'active') {
      setGame(false);
    }
    if (type === 'game') {
      setGame(true);
    }
  }, [type]);

  const backToGame = () => {
    setLives(3);
    setLevel(1);
    setNumber(1);
    if (record > recordGame) {
      setRecordGame(record);
    }
    goModals('game');
    changeColorRandomElement();
  };

  const lostGame = (id) => {
    setUserId({ id, color: 'red' });
    setLives((prevState) => prevState - 1);
    if (lives === 1) {
      setRecord(level);
      console.log(record);
      setHistory([]);
      const levelDifference = record - level;
      goModals('active', level, levelDifference, backToGame);
    }
  };

  const changingStates = () => {
    setGameBegun(false);
    setBackToHome(false);
    setGameStart(true);
  };

  const checkId = (id) => {
    if (movesHistory.length === 1) {
      if (id === movesHistory[0]) {
        setUserId({ id, color: 'green' });
        setLevel((prevState) => prevState + 1);
        setNumber((prevState) => prevState + 1);

        setTimeout(() => {
          setUserMove(false);
          setHistory([]);
        }, 500);
      } else {
        lostGame(id);
      }
    } else {
      if (id === movesHistory[0]) {
        setUserId({ id, color: 'green' });
        setHistory((prevState) => {
          prevState.shift();
          return prevState;
        });
      } else {
        lostGame(id);
      }
    }
    setTimeout(() => {
      setUserId(null);
    }, 500);
  };

  const changeColorRandomElement = (level = 1) => {
    changingStates();
    const funcBefore = () => {
      const randomInt = getRandomInt(5);
      setCurrentNumber(randomInt);
      setHistory((prevState) => [...prevState, randomInt]);

      setTimeout(() => {
        setCurrentNumber(null);

        if (moveNumber === level) {
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
    <Panel id={id}>
      {isGame && (
        <Container>
          <Header>
            {isBackToHome && (
              <ButtonStyled onClick={go} data-to="main" variant="contained">
                Рекорд: {recordGame}
              </ButtonStyled>
            )}
            {isGameStart && (
              <ButtonStyled variant="contained">
                {isUserMove ? 'ход игрока' : 'ход компьютера'}
              </ButtonStyled>
            )}
            {isGameBegun && (
              <ButtonStyled
                onClick={() => changeColorRandomElement()}
                variant="contained"
              >
                Начать игру
              </ButtonStyled>
            )}
            {recordGame > 0 && <Record> Рекорд: {recordGame} </Record>}
          </Header>
          {isGameEnd && <Game>{arrayElement}</Game>}
          <Footer>
            {isGameStart && (
              <>
                <Text> Уровень: {level}</Text>
                <Text> Жизни: {lives}</Text>
              </>
            )}
            {isBackToHome && (
              <BackToMainMenuButton
                onClick={go}
                data-to="main"
                variant="contained"
              >
                Назад
              </BackToMainMenuButton>
            )}
          </Footer>
        </Container>
      )}
    </Panel>
  );
};

GameBlock.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  goModals: PropTypes.func,
  type: PropTypes.string,
  recordGame: PropTypes.number,
  setRecordGame: PropTypes.func,
};

export default GameBlock;
