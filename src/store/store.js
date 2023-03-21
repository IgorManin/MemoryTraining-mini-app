import { rerender } from '../index';

let store = {
  game: {
    recordGame: 0,
    record: 0,
    lives: 3,
    level: 1,
    movesHistory: [],
    moveNumber: 1,
    buttonsLength: 5,
  },
  gameMethods: {
    initialLevel(value) {
      store.game.level = value;
    },
    levelUp(value) {
      store.game.level = store.game.level + value;
    },
    initialLives(value) {
      store.game.lives = value;
    },
    livesDown(value) {
      store.game.lives = store.game.lives - value;
    },
    changeRecords(value) {
      store.game.record = value;
    },
    changeRecordsGame(value) {
      store.game.recordGame = value;
    },
    addMoveNumbers(value) {
      store.game.moveNumber = store.game.moveNumber + value;
    },
    changeMoveNumbers(value) {
      store.game.moveNumber = value;
    },
    initialMoveHistory() {
      store.game.movesHistory = [];
    },
    addElementMoveHistory(value) {
      const array = store.game.movesHistory.push(value);
      return array;
    },
    changeMoveHistiry() {
      const changedArray = store.game.movesHistory.shift();
      return changedArray;
    },
  },

  modal: {
    activePanel: 'main',
    type: null,
    values: {},
    goModal(id, values) {
      this.type = id; // сделайть на всем
      this.values = values;
      rerender(store);
    },
    closeModal() {
      store.modal.type = null;
      if (store.modal.values.onClose) {
        store.modal.values.onClose();
        rerender(store);
      }
    },
  },
};

export default store;
