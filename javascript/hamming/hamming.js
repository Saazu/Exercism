//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  if (strand1 === "") {
    if (strand2 !== "") {
      throw new Error("left strand must not be empty")
    }
  }

  if (strand2 === "") {
    if (strand1 !== "") {
      throw new Error("right strand must not be empty")
    }
  }
  if (strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length');
  }

  const reducer = (totalHammingDistance, currentDNAProtein, index) =>
    strand2[index] !== currentDNAProtein ? totalHammingDistance + 1 : totalHammingDistance;

  return strand1.split("").reduce((reducer), 0)
};
