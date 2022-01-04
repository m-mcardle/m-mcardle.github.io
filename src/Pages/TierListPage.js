import React, { useRef, useState } from 'react';

import NavBar from "../Components/Navbar";
import Sidebar from "../Components/TierListPage/Sidebar";
import Square from '../Components/TierListPage/Square';
import HelpSection from '../Components/TierListPage/HelpSection';
import ExportSection from '../Components/TierListPage/ExportSection';
import { DraggableSquare, DroppableSquare } from '../Components/TierListPage/Draggables';

import { Clear, EmptyTiers } from '../Data/EmptyTiers';

import myDrivers from '../Data/MyLists/drivers.json';
import myFighters from '../Data/MyLists/fighters.json';
import myFood from '../Data/MyLists/food.json';

// TODO
// Clear board before importing my lists
// Clear board before changing page

function TierListPage({data, paramPage}) {

  const rankings = EmptyTiers();
  const [{boardState, tiers, injectedState, currentPage}, setState] = useState( // TODO split this out into multiple useState()'s
    {
      boardState: data, 
      tiers: rankings, 
      injectedState: undefined,
      currentPage: paramPage
    }
  );

  const [url, setDownloadUrl] = useState(undefined);

  if (paramPage !== currentPage) {
    setState({boardState: data, tiers, injectedState, currentPage: paramPage});
  }

  const clearBoard = () => {
    const newState = Clear();

    setState({
      boardState: boardState.map(el => { el.state = "unplaced"; el.tier = "NA"; return el }), 
      tiers: undefined,
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
    cleanedTiers.page = currentPage;

    const jsonTiers = JSON.stringify(cleanedTiers);
    const blob = new Blob([jsonTiers]);
    const downloadUrl = URL.createObjectURL(blob);
    setDownloadUrl(downloadUrl);
  };

  const doUpload = () => {
    upload.current.click();
  };

  const doDownload = (customUrl = url) => {
    console.log("Downloading:", customUrl);
    download.current.click();
    URL.revokeObjectURL(customUrl);  // free up storage--no longer needed.
    setDownloadUrl(undefined);
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
      if (object.page !== currentPage) {
        console.log("Invalid import given. Export type of", object.page, "does not match current page", currentPage);
        return;
      }
      setState({boardState: getCustomBoardState(object), tiers: object, injectedState: getElementsToInject(object)});
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
    clearBoard(); // TODO this isn't working, the re-render doesn't occur with the new injectedElements
    setState({boardState: getCustomBoardState(object), tiers: object, injectedState: getElementsToInject(object)});
  };

  const callback = (changedElement) => {
    let newRankings = EmptyTiers();
    setState({boardState: boardState.map(el => {
        if (el?.tier === undefined) {
          el.tier = "NA";
        }
        newRankings[el.tier].push({name: el.name});
        if (el.image === changedElement.image) {
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
      <Sidebar /> {/* Make this better, sticky to side and maybe a column */}
      <div className='flex mx-auto align-middle'>
        <div className="my-5 mx-auto text-center lg:text-5xl md:text-lg">
            Tier List 
        </div>
        <div className='flex mx-5 align-middle'>
          <button className='inline my-auto align-middle p-1 border-2 opacity-50' onClick={clearBoard}>Clear</button>
        </div>
        <div className='flex mx-5 align-middle'>
          <button className='inline my-auto align-middle p-1 border-2 opacity-50' onClick={loadMyRankings}>View my ranking</button>
        </div>
      </div>
      <div id="row" className="grid grid-cols-8 md:mx-52 border border-white text-center">
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
      <div className="grid grid-cols-8 gap-4 my-10 md:mx-48 border-white min-h-[30px] text-center">
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

export default TierListPage;
