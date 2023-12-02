const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandom = (min, max) => {
  const number = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    while (number.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    number.push(currentValue);
    return currentValue;
  };
};

const checkLenght = (inputString, maxLenght) => (inputString.length <= maxLenght);

const isPalindrom = (inputString) => {
  let reverseString = '';
  const newString = inputString.replaceAll(' ', '').toLowerCase();
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  return (newString === reverseString);
};

const getCount = (inputParam) => {
  const newString = inputParam.toString();
  let number = '';
  for (let i = 0; i < newString.length; i++){
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      number += newString[i];
    }
  }
  return parseInt(number, 10);
};

export {getRandomNumber, createRandom, checkLenght, isPalindrom, getCount};
