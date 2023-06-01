export const getRandomColor = () => {
  const randomNum = Math.floor(Math.random() * 16777216);
  let hexString = randomNum.toString(16);

  while (hexString.length < 6) {
    hexString = '0' + hexString;
  }

  return '#' + hexString;
};
