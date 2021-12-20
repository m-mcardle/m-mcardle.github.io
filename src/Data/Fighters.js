import Alex from '../Images/Fighters/alex.png';
import Cejudo from '../Images/Fighters/cejudo.png';
import Conor from '../Images/Fighters/conor.png';
import Dc from '../Images/Fighters/dc.png';
import Dustin from '../Images/Fighters/dustin.png';
import Gaethje from '../Images/Fighters/gaethje.png';
import Glover from '../Images/Fighters/glover.png';
import Gsp from '../Images/Fighters/gsp.png';
import Izzy from '../Images/Fighters/izzy.png';
import Jon from '../Images/Fighters/jon.png';
import Khabib from '../Images/Fighters/khabib.png';
import Max from '../Images/Fighters/max.png';
import Moreno from '../Images/Fighters/moreno.png';
import Nate from '../Images/Fighters/nate.png';
import Ngannou from '../Images/Fighters/ngannou.png';
import Nick from '../Images/Fighters/nick.png';
import Oliveira from '../Images/Fighters/oliveira.png';
import Sterling from '../Images/Fighters/sterling.png';
import Tony from '../Images/Fighters/tony.png';
import Usman from '../Images/Fighters/usman.png'

const states = {
  UNPLACED: "unplaced", // unblurred and unplaced
  PLACED: "placed", // should be blurred and there is a matching peice on board
};

export const fighters = [
  {
    name: "Alex Volkanovski",
    image: Alex,
    status: states.UNPLACED
  },
  {
    name: "Henry Cejudo",
    image: Cejudo,
    status: states.UNPLACED
  },
  {
    name: "Conor McGregor",
    image: Conor,
    status: states.UNPLACED
  },
  {
    name: "Daniel Cormier",
    image: Dc,
    status: states.UNPLACED
  },
  {
    name: "Dustin Poirier",
    image: Dustin,
    status: states.UNPLACED
  },
  {
    name: "Justin Gaethje",
    image: Gaethje,
    status: states.UNPLACED
  },
  {
    name: "Glover Teixeira",
    image: Glover,
    status: states.UNPLACED
  },
  {
    name: "George St. Pierre",
    image: Gsp,
    status: states.UNPLACED
  },
  {
    name: "Isreal Adesanya",
    image: Izzy,
    status: states.UNPLACED
  },
  {
    name: "Jon Jones",
    image: Jon,
    status: states.UNPLACED
  },
  {
    name: "Khabib Nurmagomedov",
    image: Khabib,
    status: states.UNPLACED
  },
  {
    name: "Max Holloway",
    image: Max,
    status: states.UNPLACED
  },
  {
    name: "Brandon Moreno",
    image: Moreno,
    status: states.UNPLACED
  },
  {
    name: "Nate Diaz",
    image: Nate,
    status: states.UNPLACED
  },
  {
    name: "Francis Ngannou",
    image: Ngannou,
    status: states.UNPLACED
  },
  {
    name: "Nick Diaz",
    image: Nick,
    status: states.UNPLACED
  },
  {
    name: "Charles Oliveira",
    image: Oliveira,
    status: states.UNPLACED
  },
  {
    name: "Aljamain Sterling",
    image: Sterling,
    status: states.UNPLACED
  },
  {
    name: "Tony Ferguson",
    image: Tony,
    status: states.UNPLACED
  },
  {
    name: "Kamaru Usman",
    image: Usman,
    status: states.UNPLACED
  },
];
