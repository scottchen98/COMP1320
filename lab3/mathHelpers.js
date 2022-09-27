const squareRoot = (num) => {
  return Math.sqrt(num);
};

const square = (num) => {
  return Math.pow(num, 2);
};

const distance = (x1, y1, x2, y2) => {
  const differenceInX = x2 - x1;
  const differenceInY = y2 - y1;

  const xPowerOfTwo = square(differenceInX);
  const yPowerOfTwo = square(differenceInY);

  const totalXAndY = xPowerOfTwo + yPowerOfTwo;
  return squareRoot(totalXAndY);
};

module.exports = { distance };
