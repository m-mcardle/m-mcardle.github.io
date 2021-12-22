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

const clear = {
  S: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  A: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  B: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  C: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  D: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  E: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  F: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"],
  NA: ["CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR", "CLEAR"]
};

export const EmptyTiers = () => JSON.parse(JSON.stringify(empty));
export const Clear = () => clear;