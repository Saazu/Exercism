//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const mapping = [
  ['Methionine', ['AUG']],
  ['Phenylalanine', ['UUU', 'UUC']],
  ['Leucine', ['UUA', 'UUG']],
  ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
  ['Tyrosine', ['UAU', 'UAC']],
  ['Cysteine', ['UGU', 'UGC']],
  ['Tryptophan', ['UGG']]
];

const stopCodons = ['UAA', 'UAG', 'UGA'];

const getcodons = (sequence) => sequence.match(/.{1,3}/g);

const getResultingAminoAcid = (codon) => {
  if (stopCodons.includes(codon)) {
    return 'STOP';
  } else {
    for (let i = 0; i < mapping.length; i++) {
      const [protein, condonList] = [...mapping[i]];
      if (condonList.includes(codon)) {
        return protein
      }
    }
    throw new Error("Invalid codon");
  }
}

export const translate = (sequence = "") => {
  const codons = getcodons(sequence);
  if (!codons) {
    return [];
  }
  const translation = [];
  for (let i = 0; i < codons.length; i++) {
    const aminoAcid = getResultingAminoAcid(codons[i]);
    if (aminoAcid === 'STOP') {
      break;
    }
    translation.push(aminoAcid);
  }
  return translation;
};

//console.log(translate())