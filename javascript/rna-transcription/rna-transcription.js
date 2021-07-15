//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA = ['G', 'C', 'T', 'A'];
const RNA = ['C', 'G', 'A', 'U'];

export const toRna = (sequence) => {
  return sequence
    .split("")
    .map(nucleotide => RNA[DNA.indexOf(nucleotide)])
    .join('');
};
