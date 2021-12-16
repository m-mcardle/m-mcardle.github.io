import NavBar from "../Components/Navbar";
import '../index.css';

import React, { useCallback, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useParams } from "react-router-dom";

import { drivers } from "../Data/Drivers";
import { fighters } from "../Data/Fighters";
import Sidebar from "../Components/Sidebar";



function TierListPage() {
  const params = useParams();

  let data = drivers;
  switch (params.listType) {
    case "UFC":
      data = fighters;
      break;
    case "F1":
      data = drivers;
      break;
    default:
      data = drivers;
      break;
  }

  const [driverState, setState] = useState(data);


  const buttonClicked = useCallback( // This doesn't erase states in each individual droppableSquare
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
      <Sidebar />
      <div className="text-center">
          Tier List
      </div>
      <div id="row" className="grid grid-cols-8 mx-48 border border-white text-center">
        <div key="S" className="py-5 bg-red-400 border-b">S</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 1`} oldState={driverState} setter={setState}/>)}
        <div key="A" className="py-5 bg-orange-300 border-b">A</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 2`} oldState={driverState} setter={setState}/>)}
        <div key="B" className="py-5 bg-yellow-300 border-b">B</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 3`} oldState={driverState} setter={setState}/>)}
        <div key="C" className="py-5 border-b bg-green-400">C</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 4`} oldState={driverState} setter={setState}/>)}
        <div key="D" className="py-5 border-b bg-blue-300">D</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 5`} oldState={driverState} setter={setState}/>)}
        <div key="E" className="py-5 border-b bg-blue-600">E</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 6`} oldState={driverState} setter={setState}/>)}
        <div key="F" className="py-5 border-b bg-purple-400">F</div>
        {xpos.map(x => <DroppableSquare key={`${x}, 7`} oldState={driverState} setter={setState}/> )}
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

function DragableSquare({driver, setter, oldState, onBoard = false}) {
  const [status, setState] = useState(false);

  const [collected, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { driver },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        driver.state = "placed";
        oldState = oldState.map(el => {
          if (el.driver === driver.image) {
            return driver;
          } else {
            return el;
          }
        });
        console.log(driver.state);
        setter(oldState)
        setState(true);
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
    <div key={driver.image} className={"max-h-20 max-w-20 " + ((driver.state === "placed" && !onBoard) ? " blur-sm" : "")} image={driver.image} ref={drag}>
      <img src={driver.image} className="py-1 max-h-20 max-w-20 mx-auto" alt="Tier list item"/>
    </div> 
  );
}

function DragableBoardSquare({driver, callback}) {
  const [relocated, setState] = useState(false);

  const [collected, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { driver },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setState({}); // cleanup state
        callback();
      }
    },
    options: {
      dropEffect: 'copy'
    },
  }));

  return (
    <div key={driver.image} className={"max-h-20 max-w-20"} image={driver.image} ref={drag}>
      <img src={driver.image} className="py-1 max-h-20 max-w-20 mx-auto" alt="Tier list item"/>
    </div>
  );
}

function DroppableSquare({setter, oldState, resetState = false}) {

  const [{driver}, setState] = useState({driver: undefined}); // This is the state we need to clear on button press

  const [collected, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'square',

    drop: (item, monitor) => {
      setState({driver: item.driver});
    },
    canDrop: (item, monitor) => { // TODO fix this
      if (driver) { console.log("WOW THERE'S A DRIVER HERE"); };
      return (!driver);
    }
  }));

  // use this callback for if the child moves and we need to clear the state here
  const callback = useCallback(() => {
    setState({driver: undefined})
  },
  []
  );

  useEffect(() => setState({}),[]);

  return (
    <div className="border-b text-center content-center min-h-[5rem] min-w-[5rem]" ref={drop}
      onClick={() => {
        if (!driver) { return; };
        driver.state = "unplaced";
        oldState = oldState.map(el => {
          if (el.driver === driver.image) {
            return driver;
          } else {
            return el;
          }
        });
        setter(oldState);
        setState({driver: undefined});
      }
      }>
      {driver?.state === "placed" ? <DragableBoardSquare driver={driver} setter={setter} oldState={oldState} callback={callback}/> : undefined}
    </div>
  );
}

export default TierListPage;
