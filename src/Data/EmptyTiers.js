const empty = {
  S: [],
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  NA: []
};

const nulled = {
  S: [null, null, null, null, null, null, null],
  A: [null, null, null, null, null, null, null],
  B: [null, null, null, null, null, null, null],
  C: [null, null, null, null, null, null, null],
  D: [null, null, null, null, null, null, null],
  E: [null, null, null, null, null, null, null],
  F: [null, null, null, null, null, null, null],
  NA: [null, null, null, null, null, null, null]
};

export const EmptyTiers = () => JSON.parse(JSON.stringify(empty));
export const NullTiers = () => nulled;