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
  WrapperBotton,
  WrapperForChooseMoveButton,
  WrapperForGameStarButton,
} from '../styleComponents';
import Button from '@mui/material/Button';
import LoosAlertModal from '../components/LoosAlertModal';
import { Panel } from '@vkontakte/vkui';

const buttonsLength = 5;
const getRandomInt = (max) => Math.floor(Math.random() * max);

const recordGame = [0];
const changeRecord = (value) => {
  if (value > recordGame) {
    recordGame.push(value);
  }
};

const GameBlock = (props) => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [movesHistory, setHistory] = useState([]);
  const [currentUserId, setUserId] = useState(null);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [moveNymbers, setNumbers] = useState(1);
  const [alertModal, setAlertModal] = useState(false);
  const [backToHome, setBackToHome] = useState(true);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    if (!isUserMove && level !== 1) {
      changeColorRandomElement(level);
    }
  }, [level, isUserMove]);

  useEffect(() => {
    console.log('record', record);
    console.log('recordGame', recordGame);
    if (record > recordGame) {
      changeRecord(record);
      setRecord([]);
    }
  }, [alertModal]);

  const checkId = (id) => {
    if (movesHistory.length === 1) {
      if (id === movesHistory[0]) {
        setUserId({ id, color: 'green' });
        setLevel((prevState) => prevState + 1);
        setNumbers((prevState) => prevState + 1);

        setTimeout(() => {
          setUserMove(false);
          setHistory([]);
        }, 500);
      } else {
        setUserId({ id, color: 'red' });
        setLives((prevState) => prevState - 1);
        if (lives === 1) {
          setAlertModal(true);
          setGameStart(false);
          setRecord((prevState) => [...prevState, level]);
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
          setAlertModal(true);
          setGameStart(false);
          setRecord((prevState) => [...prevState, level]);
        }
      }
    }
    setTimeout(() => {
      setUserId(null);
    }, 500);
  };

  const changeColorRandomElement = (level = 1) => {
    setBackToHome(false);
    setGameStart(true);
    const funcBefore = () => {
      const randomInt = getRandomInt(5);
      setCurrentNumber(randomInt);
      setHistory((prevState) => [...prevState, randomInt]);

      setTimeout(() => {
        setCurrentNumber(null);

        if (moveNymbers === level) {
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
    <Panel id={props.id}>
      <GameBlockWrapper>
        <Header>
          <WrapperForChooseMoveButton>
            {backToHome && (
              <Button
                onClick={props.go}
                data-to="home"
                style={{ margin: 22 }}
                variant="contained"
              >
                Рекорд: {recordGame}
              </Button>
            )}
            {isGameStart && (
              <Button style={{ margin: 22 }} variant="contained">
                {isUserMove ? 'ход игрока' : 'ход компьютера'}
              </Button>
            )}
          </WrapperForChooseMoveButton>

          <WrapperForGameStarButton>
            {!alertModal && (
              <Button
                onClick={() => changeColorRandomElement()}
                style={{ margin: 22 }}
                variant="contained"
              >
                Начать игру
              </Button>
            )}
          </WrapperForGameStarButton>
        </Header>
        {alertModal && (
          <LoosAlertModal level={level} go={props.go}></LoosAlertModal>
        )}
        {!alertModal && <Game>{arrayElement}</Game>}
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
          )}{' '}
          {backToHome && (
            <WrapperBotton>
              <Button
                onClick={props.go}
                data-to="home"
                style={{ margin: 22, width: '120px' }}
                variant="contained"
              >
                Назад
              </Button>
            </WrapperBotton>
          )}
        </Footer>
      </GameBlockWrapper>
    </Panel>
  );
};

export default GameBlock;
