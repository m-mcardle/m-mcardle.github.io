import NavBar from "../Components/Navbar";
import '../index.css';

import React, { useCallback, useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useParams } from "react-router-dom";

import { drivers } from "../Data/Drivers";
import { fighters } from "../Data/Fighters";
import { food } from "../Data/FastFood";
import Sidebar from "../Components/Sidebar";

// TODO
// Add reset button
// Make better on small screens

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
    case "Food":
      data = food;
      break;
    default:
      data = drivers;
      break;
  }

  const [boardState, setState] = useState(data);


  // const buttonClicked = useCallback( // TODO This doesn't erase states in each individual droppableSquare
  //   () => {
  //     console.log("Button Clicked");
  //     const newState = boardState.map(el => {
  //       el.state = "reset";
  //       return el;
  //     });
  //     setState(newState);
  //   },
  //   [boardState]
  // );


  const positions = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="font-mono w-full h-[150vh] bg-black text-white content-center">
      <NavBar />
      <Sidebar /> {/* Make this better, sticky to side and maybe a column */}
      <div className="my-5 text-center text-5xl">
          Tier List
      </div>
      <div id="row" className="grid grid-cols-8 mx-52 border border-white text-center">
        <div key="S" className="py-5 bg-red-400 border-b">S</div>
        {positions.map(x => <DroppableSquare tier="S" key={`${x}, 1`} oldState={boardState} setter={setState}/>)}
        <div key="A" className="py-5 bg-orange-300 border-b">A</div>
        {positions.map(x => <DroppableSquare tier="A" key={`${x}, 2`} oldState={boardState} setter={setState}/>)}
        <div key="B" className="py-5 bg-yellow-300 border-b">B</div>
        {positions.map(x => <DroppableSquare tier="B" key={`${x}, 3`} oldState={boardState} setter={setState}/>)}
        <div key="C" className="py-5 border-b bg-green-400">C</div>
        {positions.map(x => <DroppableSquare tier="C" key={`${x}, 4`} oldState={boardState} setter={setState}/>)}
        <div key="D" className="py-5 border-b bg-blue-300">D</div>
        {positions.map(x => <DroppableSquare tier="D" key={`${x}, 5`} oldState={boardState} setter={setState}/>)}
        <div key="E" className="py-5 border-b bg-blue-600">E</div>
        {positions.map(x => <DroppableSquare tier="E" key={`${x}, 6`} oldState={boardState} setter={setState}/>)}
        <div key="F" className="py-5 border-b bg-purple-400">F</div>
        {positions.map(x => <DroppableSquare tier="F" key={`${x}, 7`} oldState={boardState} setter={setState}/> )}
      </div>
      {/* TODO fix this <div className="m-5 content-center w-screen text-center">
        <button className="btn" onClick={buttonClicked}>
          Reset
        </button>
      </div> */}
      <div className="grid grid-cols-8 gap-4 my-10 mx-48 order border-white min-h-[30px] text-center">
        {boardState.map(element => <DraggableSquare key={element.name ?? element.image} element={element} oldState={boardState} setter={setState}/>)}
      </div>
      <div className="flex flex-col bg-gray-600 mx-52 opacity-25">
        <p className="my-1">Drag and drop the pictures to where you rank them</p>
        <p className="my-1">Select the tier list to do using the sidebar</p>
        <p className="my-1">Click on individual pieces on the board to reset them, or refresh to reset page</p>
      </div>
    </div>
  );
}

function DraggableSquare({element, setter, oldState}) {
  const [status, setState] = useState(false);

  const [collected, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { element },
    end: (item, monitor) => {
      console.log(item);
      if (monitor.didDrop()) {
        element.state = "placed";
        oldState = oldState.map(el => {
          if (el.driver === element.image) {
            return element;
          } else {
            return el;
          }
        });
        setter(oldState)
        setState(true);
      }
    },
    canDrag: () => {
      return !(element.state === "placed");
    },
    options: {
      dropEffect: 'copy'
  },
  }));

  return (
    <div className={"group max-h-20 max-w-20 " + ((element.state === "placed") ? " blur-sm" : "")} ref={drag}>
      <p className="group-hover:visible block invisible text-xs overflow-visible whitespace-nowrap">{element.name}</p> 
      <img src={element.image} className="py-1 max-h-20 max-w-20 mx-auto" alt={element.name}/>
    </div> 
  );
}

function DraggableBoardSquare({element, callback, setter, oldState}) {
  const [relocated, setState] = useState(false);
  // maybe this should be [reset, setState] and we reset to empty if we change state?

  const [collected, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { element },
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
    <div key={element.name} className={"max-h-20 max-w-20"} image={element.image} ref={drag}>
      <img src={element.image} className="py-1 max-h-20 max-w-20 mx-auto" alt="Tier list item"/>
    </div>
  );
}

function DroppableSquare({tier, setter, oldState}) {

  const [{ element }, setState] = useState({element: undefined}); // This is the state we need to clear on button press

  const [collected, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'square',

    drop: (item, monitor) => {
      setState({element: item.element});
    },
    canDrop: (item, monitor) => {
      return (!element);
    }
  }),
  [element]);

  // use this callback for if the child moves and we need to clear the state here
  const callback = useCallback(() => { // this callback might be the :goodman: to use in the reset button, but how
    setState({element: undefined})
  }, []);

  useEffect(() => setState({}),[]);
  return (
    <div className="border-b text-center content-center min-h-[5rem] min-w-[5rem]" ref={drop}
      onClick={() => {
        if (!element) { return; };
        element.state = "unplaced";
        element.tier = "none";
        oldState = oldState.map(el => {
          if (el.driver === element.image) {
            return element;
          } else {
            return el;
          }
        });
        setter(oldState);
        setState({driver: undefined});
      }
      }>
      {element ? <DraggableBoardSquare element={element} setter={setter} oldState={oldState} callback={callback}/> : undefined}
    </div>
  );
}

export default TierListPage;
