// export const addCurrentNumberInArray = (value, arr) => {
//     const array = [value];
//     const filteredArray = array.filter((element) => element !== null);
//     arr.randomInt.push(...filteredArray);
// };

const cheachData = () => {
  if (level === 1 && id === movesHistory[0]) {
    setUserId({ id, color: 'green' });
    setLevel((prevState) => prevState + 1);

    setTimeout(() => {
      setUserMove(false);
      setHistory([]);
    }, 500);
  } else if (level === 2 && id === movesHistory[0] && id === movesHistory[1]) {
    setUserId({ id, color: 'green' });
    setLevel((prevState) => prevState + 1);

    setTimeout(() => {
      setUserMove(false);
      setHistory([]);
    }, 500);
  }
};
cheachData();
