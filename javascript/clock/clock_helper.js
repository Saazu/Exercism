const stringifyNumber = num => {
  if (num < 10) {
    return `0${num}`;
  } else if (num < 0) {
    return 60 - num
  }
  else {
    return String(num);
  }
}

module.exports = { stringifyNumber }