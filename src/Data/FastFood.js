import aw from '../Images/FastFood/aw.png';
import arbys from '../Images/FastFood/arbys.png';
import burgerking from '../Images/FastFood/burgerking.png';
import dominos from '../Images/FastFood/dominos.png';
import kfc from '../Images/FastFood/kfc.png';
import dq from '../Images/FastFood/dq.png';
import mcdonalds from '../Images/FastFood/mcdonalds.png';
import popeyes from '../Images/FastFood/popeyes.png';
import subway from '../Images/FastFood/subway.png';
import tacobell from '../Images/FastFood/tacobell.png';
import wendys from '../Images/FastFood/wendys.png';

const states = {
  UNPLACED: "unplaced", // unblurred and unplaced
  PLACED: "placed", // should be blurred and there is a matching peice on board
};

export const food = [
  {
    image: aw,
    status: states.UNPLACED
  },
  {
    image: arbys,
    status: states.UNPLACED
  },
  {
    image: burgerking,
    status: states.UNPLACED
  },
  {
    image: dominos,
    status: states.UNPLACED
  },
  {
    image: kfc,
    status: states.UNPLACED
  },
  {
    image: dq,
    status: states.UNPLACED
  },
  {
    image: mcdonalds,
    status: states.UNPLACED
  },
  {
    image: popeyes,
    status: states.UNPLACED
  },
  {
    image: subway,
    status: states.UNPLACED
  },
  {
    image: tacobell,
    status: states.UNPLACED
  },
  {
    image: wendys,
    status: states.UNPLACED
  }
];