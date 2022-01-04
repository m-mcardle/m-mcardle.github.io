import { useDrag, useDrop} from "react-dnd";
import { useCallback, useEffect,useState } from "react";


export function DraggableSquare({element}) {
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
  }),[element]);

  useEffect(() => {
    return () => setState(false);
  },[element])

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

export function DroppableSquare({tier, masterCallback, injectedElement = undefined}) {

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

  

  useEffect(() => {
    // How do we allow it to pass something to do setState({element: undefined})
    if (injectedElement && injectedElement !== "CLEAR" && injectedElement !== element) {
      setState({element: injectedElement});
    } else if (element && injectedElement === "CLEAR") {
      element.state = "unplaced";
      element.tier = "NA";
      element.setState(false);
      setState({element: undefined});
      masterCallback(element);
    }
  },[element, injectedElement, masterCallback]);

  // the solution will need to end up not creating a draggable square either, I guess if we setState(undefined) that should do it
  return (
    <div className="border-b text-center content-center max-h-[4rem]" ref={drop}
      onClick={clear}>
      {element ? <DraggableBoardSquare element={element} callback={callback}/> : undefined}
    </div>
  );
}