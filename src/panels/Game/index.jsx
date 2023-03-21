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

const getRandomInt = (max) => Math.floor(Math.random() * max);

const GameBlock = ({ go, id, store }) => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isUserMove, setUserMove] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [currentUserId, setUserId] = useState(null);
  const [isBackToHome, setBackToHome] = useState(true);
  const [isGameBegun, setGameBegun] = useState(true);

  console.log(store.game.movesHistory);
  useEffect(() => {
    if (!isUserMove && store.game.level !== 1) {
      changeColorRandomElement(store.game.level);
    }
  }, [store.game.level, isUserMove]);

  useEffect(() => {
    if (store.game.record > store.game.recordGame) {
      store.gameMethods.changeRecordsGame(store.game.record);
    }
  }, [store.game.lives === 1]);

  const backToGame = () => {
    store.gameMethods.initialLives(3);
    store.gameMethods.initialLevel(1);
    store.gameMethods.changeMoveNumbers(1);
    changeColorRandomElement();
  };

  const lostGame = (id) => {
    setUserId({ id, color: 'red' });
    store.gameMethods.livesDown(1);
    if (store.game.lives === 0) {
      store.gameMethods.changeRecords(store.game.level);
      store.gameMethods.initialMoveHistory();
      const levelDifference = store.game.record - store.game.level;
      const record = store.game.record;
      const level = store.game.level;

      store.modal.goModal('active', {
        level,
        record,
        levelDifference,
        onClose: backToGame,
      });
    }
  };

  const changingStates = () => {
    setGameBegun(false);
    setBackToHome(false);
    setGameStart(true);
  };

  const checkId = (id) => {
    if (store.game.movesHistory.length === 1) {
      if (id === store.game.movesHistory[0]) {
        setUserId({ id, color: 'green' });
        store.gameMethods.levelUp(1);
        store.gameMethods.addMoveNumbers(1);

        setTimeout(() => {
          setUserMove(false);
          store.gameMethods.initialMoveHistory();
        }, 500);
      } else {
        lostGame(id);
      }
    } else {
      if (id === store.game.movesHistory[0]) {
        setUserId({ id, color: 'green' });
        store.gameMethods.changeMoveHistiry();
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
      const randomInt = getRandomInt(store.game.buttonsLength);
      setCurrentNumber(randomInt);
      store.gameMethods.addElementMoveHistory(randomInt);

      setTimeout(() => {
        setCurrentNumber(null);

        if (store.game.moveNumber === store.game.level) {
          setUserMove(true);
        }
      }, 1000);
    };
    let count = 0;

    const intervalId = setInterval(function () {
      count++;
      if (count === store.game.level) {
        clearInterval(intervalId);
      }
      funcBefore();
    }, 2000);
  };
  const arrayElement = [...Array(store.game.buttonsLength).keys()].map((id) => (
    <Element
      key={id}
      disabled={!isUserMove}
      $isActive={id === currentNumber}
      onClick={() => checkId(id)}
      $isChecked={id === currentUserId?.id ? currentUserId?.color : null}
    />
  ));

  return (
    <Panel id={id}>
      <Container>
        <Header>
          {isBackToHome && (
            <ButtonStyled onClick={go} data-to="main" variant="contained">
              Рекорд: {store.game.recordGame}
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
          {store.game.recordGame > 0 && (
            <Record> Рекорд: {store.game.recordGame} </Record>
          )}
        </Header>
        <Game>{arrayElement}</Game>
        <Footer>
          {isGameStart && (
            <>
              <Text> Уровень: {store.game.level}</Text>
              <Text> Жизни: {store.game.lives}</Text>
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

GameBlock.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  goModals: PropTypes.func,
  type: PropTypes.string,
  recordGame: PropTypes.number,
  setRecordGame: PropTypes.func,
};

export default GameBlock;
