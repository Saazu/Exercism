//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (listOfResistors) => {
  const [firstColor, secondColor] = [listOfResistors[0], listOfResistors[1]];
  return (10 * COLORS.indexOf(firstColor)) + COLORS.indexOf(secondColor)
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];