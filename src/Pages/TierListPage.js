import NavBar from "../Components/Navbar";
import '../index.css';



import React, { useCallback, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { fancyDrivers } from "../Data/Drivers";

const originalState = fancyDrivers;


function TierListPage(props) {
  const [driverState, setState] = useState(fancyDrivers);

  const buttonClicked = useCallback(
    () => {
      console.log("Button Clicked");
      const newState = driverState.map(el => {
        el.state = "unplaced";
        return el;
      });
      setState(newState);
    },
    [driverState]
  );


  const xpos = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="font-mono w-full h-[150vh] bg-black text-white content-center">
      <NavBar />
      <div className="text-center">
          Tier List
      </div>
      <div id="row" className="grid grid-cols-8 mx-48 border border-white text-center">
        <div className="py-5 bg-red-400 border-b">S</div>
        {xpos.map(x => <DroppableSquare x={x} y="1" oldState={driverState} setter={setState}/>)}
        <div className="py-5 bg-orange-300 border-b">A</div>
        {xpos.map(x => <DroppableSquare x={x} y="2" oldState={driverState} setter={setState}/>)}
        <div className="py-5 bg-yellow-300 border-b">B</div>
        {xpos.map(x => <DroppableSquare x={x} y="3" oldState={driverState} setter={setState}/>)}
        <div className="py-5 border-b bg-green-400">C</div>
        {xpos.map(x => <DroppableSquare x={x} y="4" oldState={driverState} setter={setState}/>)}
        <div className="py-5 border-b bg-blue-300">D</div>
        {xpos.map(x => <DroppableSquare x={x} y="5" oldState={driverState} setter={setState}/>)}
        <div className="py-5 border-b bg-blue-600">E</div>
        {xpos.map(x => <DroppableSquare x={x} y="6" oldState={driverState} setter={setState}/>)}
        <div className="py-5 border-b bg-purple-400">F</div>
        {xpos.map(x => <DroppableSquare x={x} y="7" oldState={driverState} setter={setState}/> )}
      </div>
      <div className="m-5 content-center w-screen text-center">
        <button className="btn" onClick={buttonClicked}>
          Reset
        </button>
      </div>
      <div className="grid grid-cols-8 my-10 mx-48 order border-white min-h-[30px] text-center">
        {driverState.map(driver => <DragableSquare driver={driver} oldState={driverState} setter={setState}/>)}
      </div>
    </div>
  );
}

// Oldstate is undefined for draggable nested in droppable
function DragableSquare({driver, setter, oldState, onBoard = false}) {
  const [status, setState] = useState(false);

  const [collected, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { driver },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setState(true);
        driver.state = "placed";
        oldState = oldState.map(el => {
          if (el.driver === driver.image) {
            return driver;
          } else {
            return el;
          }
        });
        setter(oldState)
      }
    },
    canDrag: () => {
      return !(driver.state === "placed" && !onBoard);
    },
    options: {
      dropEffect: 'copy'
  },
  }));

  if (status && onBoard) {
    return null; // Remove image from board
  }

  if (onBoard && driver.status === "unplaced") {
    return null;
  }

  return (
    <div key={driver.image} className={"max-h-20 max-w-20" + ((driver.state === "placed" && !onBoard) ? " blur-sm" : "")} image={driver.image} ref={drag}>
      <img src={driver.image} className="py-1 max-h-20 max-w-20" alt="Pic 1"/>
    </div> 
  );
}

function DroppableSquare({x, y, setter, oldState}) {

  const [{driver}, setState] = useState({driver: undefined});

  const [collected, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'square',

    drop: (item, monitor) => {
      setState({driver: item.driver});
    },
    canDrop: () => { // TODO fix this
      return (!driver);
    }
  }));

  return (
    <div id={x+y} className="border-b  text-center content-center min-h-[5rem] min-w-[5rem] border-2" x={x} y={y} ref={drop}
      onClick={() => {
        if (!driver) { return; };
        setState({driver: undefined});
        driver.state = "unplaced";
        oldState = oldState.map(el => {
          if (el.driver === driver.image) {
            return driver;
          } else {
            return el;
          }
        });
        setter(oldState);
      }
      }>
      {driver ? <DragableSquare driver={driver} onBoard={true} setter={setter} oldState={oldState}/> : undefined}
    </div>
  );
}

export default TierListPage;