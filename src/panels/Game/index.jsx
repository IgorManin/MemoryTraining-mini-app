import React, { useEffect, useState } from 'react';
import { Panel } from '@vkontakte/vkui';
import LosingModal from '../../components/LosingModal';
import {
  BackToMainMenuButton,
  Container,
} from '../../components/styleComponents';
import { ButtonStyled, Element, Footer, Game, Header, Text } from './styled';

const buttonsLength = 5;
const getRandomInt = (max) => Math.floor(Math.random() * max);

let recordGame = 0;

const GameBlock = ({ go, id }) => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [movesHistory, setHistory] = useState([]);
  const [currentUserId, setUserId] = useState(null);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [moveNumber, setNumber] = useState(1);
  const [modal, setModal] = useState(false);
  const [isBackToHome, setBackToHome] = useState(true);
  const [record, setRecord] = useState(null);
  const [startGameButton, setGameButton] = useState(true);

  useEffect(() => {
    if (!isUserMove && level !== 1) {
      changeColorRandomElement(level);
    }
  }, [level, isUserMove]);

  const backToGame = () => {
    setModal(false);
    setLives(3);
    setLevel(1);
    setNumber(1);
    changeColorRandomElement();
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
        setUserId({ id, color: 'red' });
        setLives((prevState) => prevState - 1);
        if (lives === 1) {
          setModal(true);
          setGameStart(false);
          setRecord(level);
          setHistory([]);
        }
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
        if (lives === 1) {
          setModal(true);
          setGameStart(false);
          setRecord(level);
          setHistory([]);
        }
      }
    }
    setTimeout(() => {
      setUserId(null);
    }, 500);
  };

  const changeColorRandomElement = (level = 1) => {
    setGameButton(false);
    setBackToHome(false);
    setGameStart(true);
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
      <Container>
        <Header>
          {backToHome && (
            <ButtonStyled onClick={go} data-to="main" variant="contained">
              Рекорд: {recordGame}
            </ButtonStyled>
          )}
          {isGameStart && (
            <ButtonStyled variant="contained">
              {isUserMove ? 'ход игрока' : 'ход компьютера'}
            </ButtonStyled>
          )}
          {startGameButton && !modal && (
            <ButtonStyled
              onClick={() => changeColorRandomElement()}
              variant="contained"
            >
              Начать игру
            </ButtonStyled>
          )}
        </Header>
        {modal ? (
          <LosingModal
            level={level}
            levelDifference={recordGame - record}
            clickHandler={backToGame}
          />
        ) : (
          <Game>{arrayElement}</Game>
        )}
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
    </Panel>
  );
};

export default GameBlock;
