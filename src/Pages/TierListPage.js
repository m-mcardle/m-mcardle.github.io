import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useParams } from "react-router-dom";

import NavBar from "../Components/Navbar";
import Sidebar from "../Components/TierListPage/Sidebar";

import { drivers } from "../Data/Drivers";
import { fighters } from "../Data/Fighters";
import { food } from "../Data/FastFood";
import { EmptyTiers } from '../Data/EmptyTiers';

import myDrivers from '../Data/MyLists/drivers.json';
import myFighters from '../Data/MyLists/fighters.json';
import myFood from '../Data/MyLists/food.json';

// TODO
// Add reset button (new states should work), bug where null squares don't accept new elements
// Make better on small screens
// Add property to exports that has what list it is for, for validation
// Clear board before importing my lists

function TierListPage() {
  const params = useParams();

  let data = drivers;
  let currentPage = "F1";

  switch (params.listType) {
    case "UFC":
      data = fighters;
      currentPage = "UFC";
      break;
    case "F1":
      data = drivers;
      currentPage = "F1";
      break;
    case "Food":
      data = food;
      currentPage = "Food";
      break;
    default:
      data = drivers;
      currentPage = "F1";
      break;
  }

  const rankings = EmptyTiers();
  const [{boardState, tiers, url, injectedState}, setState] = useState({boardState: data, tiers: rankings, url: undefined, injectedState: undefined});

  // TODO using the new states we can probably clear the board now
  const clearButton = () => {
    const newState = EmptyTiers(); // Figure out how to get this to reset DroppableSquares
    // Notes:
    // if undefined is passed to DroppableSquare we prolly don't want anything to happen bc that is what is passed on a non-upload refresh

    setState({boardState: boardState.map(el => { el.state = "unplaced"; return el }), 
      tiers: undefined,
      url: undefined,
      injectedState: newState
    });
  };

  const upload = useRef(null);
  const download = useRef(null);

  const exportTiers = () => {
    let cleanedTiers = EmptyTiers();

    for (const [key, value] of Object.entries(tiers)) {
      cleanedTiers[key] = value.map(({name}) => ({name: name}));
    }

    const jsonTiers = JSON.stringify(cleanedTiers);
    const blob = new Blob([jsonTiers]);
    const downloadUrl = URL.createObjectURL(blob);
    setState({boardState, tiers, url: downloadUrl, injectedState})
  };

  const doUpload = () => {
    upload.current.click();
  };

  const doDownload = (customUrl = url) => {
    console.log("Downloading:", customUrl);
    download.current.click();
    URL.revokeObjectURL(customUrl);  // free up storage--no longer needed.
    setState({boardState, tiers, url: undefined, injectedState});
  }
  
  let elementsToInject = EmptyTiers();

  const openFile = (evt) => {
    let status = []; // Status output
    const fileObj = evt.target.files[0];
    const reader = new FileReader();
        
    let fileLoaded = e => {
      // e.target.result is the file's content as text
      const fileContents = e.target.result;
      status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
      // Show first 80 characters of the file
      const first80char = fileContents.substring(0,80);
      status.push (`First 80 characters of the file:\n${first80char}`)
      console.log(status);

      const object = JSON.parse(fileContents);
      setState({boardState: getCustomBoardState(object), tiers: object, url: url, injectedState: getElementsToInject(object)});
    }

    // Mainline of the method
    reader.onload = fileLoaded;
    reader.readAsText(fileObj);
  }

  const getElementsToInject = (tierObject) => {
    const tiers = ["S", "A", "B", "C", "D", "E", "F"];
    for (const i in tiers) {
      const tier = tiers[i];
      elementsToInject[tier] = tierObject[tier].map(importEl => {
        const boardElement = boardState.find(el => el.name === importEl.name);
        boardElement.status = "placed";
        boardElement.tier = tier;
        return boardElement;
      });
    }
    return elementsToInject;
  }

  const getCustomBoardState = (tierObject) => {
    const unplacedElements = tierObject.NA;
    const newState = boardState.map(el => {
      if (unplacedElements.find(unplaced => unplaced.name === el.name) !== undefined) {
        el.state = "unplaced";
        return el;
      } else {
        el.state = "placed";
        return el;
      }
    });
    return newState;
  };

  const loadMyRankings = () => {
    let object = myDrivers
    switch (currentPage) {
      case "UFC":
        object = myFighters;
        break;
      case "F1":
        object = myDrivers;
        break;
      case "Food":
        object = myFood;
        break;
      default:
        object = myDrivers;
        break;
    }
    setState({boardState: getCustomBoardState(object), tiers: object, url: url, injectedState: getElementsToInject(object)});
  };

  const callback = (changedElement) => {
    let newRankings = EmptyTiers();
    setState({boardState: boardState.map(el => {
        if (el?.tier === undefined) {
          el.tier = "NA";
        }
        newRankings[el.tier].push({name: el.name});
        if (el.driver === changedElement.image) {
          return changedElement;
        } else {
          return el;
        }
      }),
      tiers: newRankings,
      injectedState: undefined
    });
  }

  const positions = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="font-mono w-full h-[150vh] bg-black text-white content-center">
      <NavBar />
      <Sidebar currentPage={currentPage}/> {/* Make this better, sticky to side and maybe a column */}
      <div className='flex mx-auto align-middle'>
        <div className="my-5 mx-auto text-center lg:text-5xl md:text-lg">
            Tier List
        </div>
        <div className='flex mx-5 align-middle'>
          <button className='inline my-auto align-middle p-1 border-2 opacity-50' onClick={clearButton}>Clear</button>
        </div>
        <div className='flex mx-5 align-middle'>
          <button className='inline my-auto align-middle p-1 border-2 opacity-50' onClick={loadMyRankings}>View my ranking</button>
        </div>
      </div>
      <div id="row" className="grid grid-cols-8 mx-52 border border-white text-center">
        <Square className={"bg-red-400"}>S</Square>
        {positions.map(x => <DroppableSquare tier="S" key={`${x}, 1`} masterCallback={callback} injectedElement={injectedState?.S[x - 1]}/>)}
        <Square className={"bg-orange-300"}>A</Square>
        {positions.map(x => <DroppableSquare tier="A" key={`${x}, 2`} masterCallback={callback} injectedElement={injectedState?.A[x - 1]}/>)}
        <Square className={"bg-yellow-300"}>B</Square>
        {positions.map(x => <DroppableSquare tier="B" key={`${x}, 3`} masterCallback={callback} injectedElement={injectedState?.B[x - 1]}/>)}
        <Square className={"bg-green-400"}>C</Square>
        {positions.map(x => <DroppableSquare tier="C" key={`${x}, 4`} masterCallback={callback} injectedElement={injectedState?.C[x - 1]}/>)}
        <Square className={"bg-blue-300"}>D</Square>
        {positions.map(x => <DroppableSquare tier="D" key={`${x}, 5`} masterCallback={callback} injectedElement={injectedState?.D[x - 1]}/>)}
        <Square className={"bg-blue-600"}>E</Square>
        {positions.map(x => <DroppableSquare tier="E" key={`${x}, 6`} masterCallback={callback} injectedElement={injectedState?.E[x - 1]}/>)}
        <Square className={"bg-purple-400"}>F</Square>
        {positions.map(x => <DroppableSquare tier="F" key={`${x}, 7`} masterCallback={callback} injectedElement={injectedState?.F[x - 1]}/> )}
      </div>
      <div className="grid grid-cols-8 gap-4 my-10 mx-48 border-white min-h-[30px] text-center">
        {boardState.map(element => <DraggableSquare key={element.name ?? element.image} element={element}/>)}
      </div>
      <HelpSection/>
      <ExportSection doDownload={doDownload} doUpload={doUpload} exportTiers={exportTiers} url={url}/>
      <a href={url} ref={download} download="tiers.json" className="hidden">
          Do the download
        </a>
        <input type="file" className="hidden"
            multiple={false}
            accept=".json"
            ref={upload}
            onChange={evt => openFile(evt)}
        />
    </div>
  );
}

function DraggableSquare({element}) {
  const [used, setState] = useState(false);
  element.setState = setState;

  const [{isDragging}, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { element },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        element.state = "placed";
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
    <div className={"group max-h-[4rem] max-w-[4rem] " + (element.state === "placed" ? " blur-sm" : "") + (isDragging ? " bg-white" : "")} ref={drag}>
      <p className={"group-hover:visible block invisible text-xs overflow-visible whitespace-nowrap text-center"}>{element.name}</p>
      <div ref={dragPreview}>
        <img src={element.image} className="py-1 max-h-[4rem] max-w-[4rem] mx-auto" alt={element.name}/>
      </div>
    </div>
  );
}

function DraggableBoardSquare({element, callback}) {
  const [{isDragging}, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'square',
		item: { element },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        callback();
      }
    },
    options: {
      dropEffect: 'copy'
    },
  }));

  return (
    <div className={"group max-h-[4rem] max-w-[4rem]" + (isDragging ? " bg-white" : "")} ref={drag}>
      <div ref={dragPreview}>
        <img src={element.image} className="py-1 max-h-[4rem] max-w-[4rem] mx-auto" alt={element.name}/>
      </div>
    </div>
  );
}

function DroppableSquare({tier, masterCallback, injectedElement = undefined}) {

  const [{ element }, setState] = useState({element: undefined});

  const [collected, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'square',

    drop: (item, monitor) => {
      item.element.tier = tier;
      setState({element: item.element});
      masterCallback(item.element);
    },
    canDrop: (item, monitor) => {
      return (!element);
    }
  }),
  [element]);

  // use this callback for if the child moves and we need to clear the state here
  const callback = useCallback(() => {
    setState({element: undefined})
  }, []);

  const clear = useCallback(() => {
    if (!element) { return; };
    element.state = "unplaced";
    element.tier = "NA";
    element.setState(false);
    setState({element: undefined});
    masterCallback(element);
  }, [element, masterCallback]);

  if (injectedElement && injectedElement !== element) {
    setState({element: injectedElement});
  }

  useEffect(() => setState({}),[]);
  return (
    <div className="border-b text-center content-center max-h-[4rem]" ref={drop}
      onClick={clear}>
      {element ? <DraggableBoardSquare element={element} callback={callback}/> : undefined}
    </div>
  );
}

function Square({className, children}) {
  return (
    <div className={`flex-initial py-5 border-b h-[4rem] ${className}`}>
      {children}
    </div>
  );
}

function HelpSection() {
  return (
    <div className="flex flex-col bg-gray-600 mx-52 opacity-25">
      <p className="my-1">Drag and drop the pictures to where you rank them</p>
      <p className="my-1">Select the tier list to do using the sidebar</p>
      <p className="my-1">Click on individual pieces on the board to reset them, or refresh to reset page</p>
      <p className="my-1">Click on <b>View my rankings</b> to see how I ranked things</p>
      <p className="my-1">To export a tier list, make your selections then press <b>Save Tier List</b> and then <b>Download</b></p>
      <p className="my-1">To import a tier list, click on <b>Upload</b> and then select an exported JSON file</p>
    </div>
  );
}

function ExportSection({exportTiers, doDownload, doUpload, url}) {
  return (
    <div className="m-5 w-screen mx-52">
      <button className="border-2 p-1" onClick={exportTiers}>
        Save Tier List
      </button>
      <button className={`border-2 p-1 mx-5 ${!url ? "text-gray-400" : undefined}`} onClick={doDownload}>
        Download
      </button>
      <button className="border-2 p-1" onClick={doUpload}>
        Upload
      </button>
    </div>
  );
}

export default TierListPage;
